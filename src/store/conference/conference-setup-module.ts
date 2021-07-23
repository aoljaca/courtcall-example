import {
  BackgroundOption,
  NO_BACKGROUND_BLUR_OPTION,
} from "@/model/meeting/av-options/background-option";
import ToastService from "@/services/toast";
import { TYPE } from "vue-toastification";
import { Module } from "vuex";

export enum VideoState {
  Enabled = "Enabled",
  Disabled = "Disabled",
  Loading = "Loading",
  Unavailable = "Unavailable",
}
export enum AudioState {
  Unmuted = "Unmuted",
  Muted = "Muted",
  Unavailable = "Unavailable",
}

const conferenceSetupModule: Module<any, any> = {
  namespaced: true,
  state: {
    echoCancellation: false,
    selectedVideoDevice: null,
    selectedAudioInputDevice: null,
    selectedAudioOutputDevice: null,
    videoDevices: [],
    audioInputDevices: [],
    audioOutputDevices: [],
    videoState: VideoState.Enabled,
    audioState: AudioState.Unmuted,
    activeBackground: NO_BACKGROUND_BLUR_OPTION,
  },
  mutations: {
    setEchoCancellation(state, newValue: boolean) {
      state.echoCancellation = newValue;
    },
    setSelectedVideoDevice(state, newDevice: MediaDeviceInfo) {
      state.selectedVideoDevice = newDevice;
    },
    setSelectedAudioInputDevice(state, newDevice: MediaDeviceInfo) {
      state.selectedAudioInputDevice = newDevice;
    },
    setSelectedAudioOutputDevice(state, newDevice: MediaDeviceInfo) {
      state.selectedAudioOutputDevice = newDevice;
    },
    setVideoDevices(state, devices: MediaDeviceInfo[]) {
      state.videoDevices = devices;
    },
    setAudioInputDevices(state, devices: MediaDeviceInfo[]) {
      state.audioInputDevices = devices;
    },
    setAudioOutputDevices(state, devices: MediaDeviceInfo[]) {
      state.audioOutputDevices = devices;
    },
    setVideoState(state, newState: VideoState) {
      state.videoState = newState;
    },
    setAudioState(state, newState: VideoState) {
      state.audioState = newState;
    },
    setActiveBackground(state, background: BackgroundOption) {
      state.activeBackground = background;
    },
  },
  actions: {
    async toggleVideoState({ dispatch, commit, state }) {
      const newState =
        state.videoState !== VideoState.Enabled
          ? VideoState.Enabled
          : VideoState.Disabled;

      if (newState === VideoState.Disabled && state.selectedVideoDevice) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            deviceId: state.selectedVideoDevice.deviceId,
          },
        });
        stream.getVideoTracks().map(function (val) {
          val.stop();
        });
      } else {
        if (!state.videoDevices.length) {
          ToastService.sendMessage("No video devices found.", {
            type: TYPE.INFO,
          });
          return;
        }
        dispatch("alterSelectedVideoDevice", state.selectedVideoDevice);
      }
      commit("setVideoState", newState);
    },
    toggleEchoCancellation({ commit, state }) {
      commit("setEchoCancellation", !state.echoCancellation);
    },
    async alterSelectedVideoDevice({ commit }, newDevice: MediaDeviceInfo) {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          deviceId: newDevice.deviceId,
        },
      });
      const videoElement = document.getElementById(
        "video-preview"
      ) as HTMLVideoElement;
      videoElement.srcObject = stream;
      commit("setSelectedVideoDevice", newDevice);
    },
    alterSelectedAudioInputDevice({ commit }, newDevice: MediaDeviceInfo) {
      commit("setSelectedAudioInputDevice", newDevice);
    },
    alterSelectedAudioOutputDevice({ commit }, newDevice: MediaDeviceInfo) {
      commit("setSelectedAudioOutputDevice", newDevice);
    },
    alterVideoDevices({ commit }, devices: MediaDeviceInfo[]) {
      commit("setVideoDevices", devices);
    },
    alterAudioInputDevices({ commit }, devices: MediaDeviceInfo[]) {
      commit("setAudioInputDevices", devices);
    },
    alterAudioOutputDevices({ commit }, devices: MediaDeviceInfo[]) {
      commit("setAudioOutputDevices", devices);
    },
    alterVideoState({ commit }, newState: VideoState) {
      commit("setVideoState", newState);
    },
    alterAudioState({ commit }, newState: VideoState) {
      commit("setAudioState", newState);
    },
    alterActiveBackground({ commit }, background: BackgroundOption) {
      commit("setActiveBackground", background);
    },
    async loadVideoDevices({ commit }) {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices: MediaDeviceInfo[] = [];

      devices.forEach((device) => {
        if (device.kind === "videoinput") {
          videoDevices.push(device);
        }
      });

      commit("setVideoDevices", videoDevices);
    },
    async loadAudioDevices({ commit, state }) {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const inputDevices: MediaDeviceInfo[] = [];
      const outputDevices: MediaDeviceInfo[] = [];

      devices.forEach((device) => {
        if (device.kind === "audiooutput") {
          outputDevices.push(device);
        }
        if (device.kind === "audioinput") {
          inputDevices.push(device);
        }
      });

      if (!state.selectedAudioInputDevice && inputDevices.length) {
        commit("setSelectedAudioInputDevice", inputDevices[0]);
      }

      if (!state.selectedAudioOutputDevice && outputDevices.length) {
        commit("setSelectedAudioOutputDevice", outputDevices[0]);
      }

      commit("setAudioInputDevices", inputDevices);
      commit("setAudioOutputDevices", outputDevices);
    },
    async stopAllStreams() {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          stream.getTracks().forEach((t) => t.stop());
        });
    },
  },
  getters: {
    hasActiveBackground: (state) =>
      state.activeBackground !== NO_BACKGROUND_BLUR_OPTION,
  },
};

export default conferenceSetupModule;
