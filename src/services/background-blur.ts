import { BackgroundOption } from "@/model/meeting/av-options/background-option";
import { injectable } from "inversify-props";
import Vue from "vue";
import { Store } from "vuex/types/index";
import { DateTime } from "luxon";
import * as tfjs from "@tensorflow/tfjs";
import * as BodyPix from "@tensorflow-models/body-pix";
export interface IBackgroundBlurService {
  alterVideo: (
    videoElementId: string,
    canvasElementId: string,
    backgroundOptions: BackgroundOption,
    store: Store<any>
  ) => void;
  bootstrap: () => void;
}
interface BindPageParams {
  videoElement: HTMLVideoElement;
  canvasElement: HTMLCanvasElement;
  backgroundUrl?: string;
  timestamp: string;
  store: Store<any>;
}
@injectable()
export class BackgroundBlurServiceImpl implements IBackgroundBlurService {
  net: BodyPix.BodyPix | null = null;

  async getNet() {
    if (this.net) {
      return this.net;
    } else {
      const net = await BodyPix.load({
        multiplier: 0.75,
        outputStride: 16,
        quantBytes: 4,
        architecture: "MobileNetV1",
      });
      this.net = net;
      return net;
    }
  }
  bootstrap() {
    tfjs.getBackend();
    this.getNet();
  }
  alterVideo(
    videoElementId: string,
    canvasElementId: string,
    backgroundOptions: BackgroundOption,
    store: Store<any>
  ) {
    const videoElement = document.getElementById(
      videoElementId
    ) as HTMLVideoElement;
    const canvasElement = document.getElementById(
      canvasElementId
    ) as HTMLCanvasElement;
    store.dispatch("BackgroundBlurModule/changeModeAction", {
      mode: "loading",
    });
    videoElement.height = videoElement.videoHeight;
    videoElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    canvasElement.width = videoElement.videoWidth;
    const dateTime = DateTime.now().toISO();

    store.dispatch("BackgroundBlurModule/updateTimeStampAction", {
      timestamp: dateTime,
    });
    if (backgroundOptions.type == "none") {
      store.dispatch("BackgroundBlurModule/changeModeAction", { mode: "off" });
      canvasElement.style.background = "";
      videoElement.removeAttribute("height");
      videoElement.removeAttribute("width");
    } else if (backgroundOptions.type === "blur") {
      this.startBlur({
        videoElement,
        canvasElement,
        timestamp: dateTime,
        store,
      });
    } else {
      this.startBackground({
        videoElement,
        canvasElement,
        timestamp: dateTime,
        store,
        backgroundUrl: `url('${backgroundOptions.backgroundUrl}')`,
      });
    }
  }

  private async startBlur(options: BindPageParams) {
    tfjs.getBackend();
    const net = await this.getNet();
    this.segmentBlurInRealTime(net, options);
    options.store.dispatch("BackgroundBlurModule/changeModeAction", {
      mode: "on",
    });
  }

  private async startBackground(options: BindPageParams) {
    tfjs.getBackend();
    const net = await this.getNet();
    options.canvasElement.style.backgroundSize = `cover`;
    options.canvasElement.style.background = options.backgroundUrl!;
    this.segmentBackgroundInRealTime(net, options);
    options.store.dispatch("BackgroundBlurModule/changeModeAction", {
      mode: "on",
    });
  }

  private async segmentBackgroundInRealTime(
    net: BodyPix.BodyPix,
    options: BindPageParams
  ) {
    const context = options.canvasElement.getContext("2d");
    //context?.drawImage(options.image!,0,0,options.image!.width,options.image!.height,0,0,options.canvasElement.width,options.canvasElement.height);
    const segmentation = await net.segmentPerson(options.videoElement, {
      maxDetections: 1,
      nmsRadius: 1,
    });
    const foregroundColor = { r: 0, g: 0, b: 0, a: 255 };
    const backgroundColor = { r: 0, g: 0, b: 0, a: 0 };
    const coloredPartImage = BodyPix.toMask(
      segmentation,
      foregroundColor,
      backgroundColor,
      false
    );
    context!.globalCompositeOperation = "destination-over";
    context!.putImageData(coloredPartImage, 0, 0);
    context!.globalCompositeOperation = "source-in";
    context!.drawImage(options.videoElement, 0, 0);

    const dateTime = options.store.state.BackgroundBlurModule.timestamp;

    if (options.timestamp === dateTime) {
      this.segmentBackgroundInRealTime(net, options);
    }
  }

  private async segmentBlurInRealTime(
    net: BodyPix.BodyPix,
    options: BindPageParams
  ) {
    const segmentation = await net.segmentPerson(options.videoElement);
    const context = options.canvasElement.getContext("2d")!;
    BodyPix.drawBokehEffect(
      document.getElementById("canvas-preview") as HTMLCanvasElement,
      options.videoElement,
      segmentation,
      6,
      2,
      false
    );

    const dateTime = options.store.state.BackgroundBlurModule.timestamp;

    if (options.timestamp === dateTime) {
      this.segmentBlurInRealTime(net, options);
    }
  }

  private videoDimensions(video: HTMLVideoElement) {
    // Ratio of the video's intrisic dimensions
    const videoRatio = video.videoWidth / video.videoHeight;
    // The width and height of the video element
    let width = video.offsetWidth;
    let height = video.offsetHeight;
    // The ratio of the element's width to its height
    const elementRatio = width / height;
    // If the video element is short and wide
    if (elementRatio > videoRatio) width = height * videoRatio;
    // It must be tall and thin, or exactly equal to the original ratio
    else height = width / videoRatio;
    return {
      width: width,
      height: height,
    };
  }
}
