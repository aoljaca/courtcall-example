import { environment } from "@/environments/environment";
import { injectable } from "inversify-props";
import Vue from "vue";

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
}
