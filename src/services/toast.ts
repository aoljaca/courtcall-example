import { injectable } from "inversify-props";
import Vue from "vue";

export interface ToastService {
  standardToast: () => void;
}

@injectable()
export class ToastServiceImpl {
  public standardToast(): void {
    Vue.$toast("Example Toast", {
      timeout: 3000,
    });
  }
}
