import { environment } from "@/environments/environment";
import { injectable } from "inversify-props";
import Vue from "vue";
import {
  ToastContent,
  ToastOptions,
} from "vue-toastification/dist/types/src/types";

export interface ToastService {
  standardToast: () => void;
}

@injectable()
export class ToastServiceImpl {
  public standardToast(): void {
    Vue.$toast(environment.name, {
      timeout: 3000,
    });
  }
  static sendMessage(content: ToastContent, options?: ToastOptions) {
    Vue.$toast(content, options);
  }
}
