import { environment } from "@/environments/environment";
import Vue from "vue";
import {
  ToastContent,
  ToastOptions,
} from "vue-toastification/dist/types/src/types";

export class ToastService {
  public standardToast(): void {
    Vue.$toast(environment.name, {
      timeout: 3000,
    });
  }
  sendMessage(content: ToastContent, options?: ToastOptions) {
    Vue.$toast(content, options);
  }
}

export default new ToastService();
