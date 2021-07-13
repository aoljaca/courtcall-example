import { BackgroundOption } from "@/model/meeting/av-options/background-option";
import { injectable } from "inversify-props";
import { DateTime } from "luxon";
import * as tfjs from "@tensorflow/tfjs";
import * as BodyPix from "@tensorflow-models/body-pix";
import { VideoState } from "@/store/conference/conference-setup-module";
import Store from "../store/index";
export interface IBackgroundBlurService {
  alterVideo: (
    videoElementId: string,
    canvasElementId: string,
    backgroundOptions: BackgroundOption
  ) => void;
  bootstrap: () => void;
}
interface BindPageParams {
  videoElement: HTMLVideoElement;
  canvasElement: HTMLCanvasElement;
  backgroundUrl?: string;
  timestamp: string;
}
@injectable()
export class BackgroundBlurServiceImpl implements IBackgroundBlurService {
  net: BodyPix.BodyPix | null = null;

  async getNet(): Promise<BodyPix.BodyPix> {
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

  async alterVideo(
    videoElementId: string,
    canvasElementId: string,
    backgroundOptions: BackgroundOption
  ): Promise<void> {
    Store.dispatch("ConferenceSetupModule/alterVideoState", VideoState.Loading);
    const videoElement = document.getElementById(
      videoElementId
    ) as HTMLVideoElement;
    const canvasElement = document.getElementById(
      canvasElementId
    ) as HTMLCanvasElement;

    const videoDimensions = this.videoDimensions(videoElement);
    videoElement.height = videoDimensions.height;
    videoElement.width = videoDimensions.width;
    canvasElement.height = videoDimensions.height;
    canvasElement.width = videoDimensions.width;
    const dateTime = DateTime.now().toISO();

    Store.dispatch("BackgroundBlurModule/updateTimeStampAction", {
      timestamp: dateTime,
    });

    const currentBackground =
      Store.state.ConferenceSetupModule.activeBackground;
    if (backgroundOptions !== currentBackground) {
      Store.dispatch(
        "ConferenceSetupModule/alterActiveBackground",
        backgroundOptions
      );
    }

    if (backgroundOptions.type == "none") {
      canvasElement.style.background = "";
      Store.dispatch(
        "ConferenceSetupModule/alterVideoState",
        VideoState.Enabled
      );
    } else if (backgroundOptions.type === "blur") {
      await this.startBlur({
        videoElement,
        canvasElement,
        timestamp: dateTime,
      });
    } else {
      await this.startBackground({
        videoElement,
        canvasElement,
        timestamp: dateTime,
        backgroundUrl: `url('${backgroundOptions.backgroundUrl}')`,
      });
    }
  }

  private async startBlur(options: BindPageParams) {
    tfjs.getBackend();
    const net = await this.getNet();
    this.segmentBlurInRealTime(net, options);
    Store.dispatch("ConferenceSetupModule/alterVideoState", VideoState.Enabled);
  }

  private async startBackground(options: BindPageParams) {
    tfjs.getBackend();
    const net = await this.getNet();
    options.canvasElement.style.background = options.backgroundUrl!;
    this.segmentBackgroundInRealTime(net, options);
    Store.dispatch("ConferenceSetupModule/alterVideoState", VideoState.Enabled);
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

    const dateTime = Store.state.BackgroundBlurModule.timestamp;

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

    const dateTime = Store.state.BackgroundBlurModule.timestamp;

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
      width: width || video.videoWidth,
      height: height || video.videoHeight,
    };
  }
}
