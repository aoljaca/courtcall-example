import {
  BackgroundBlurServiceImpl,
  IBackgroundBlurService,
} from "@/services/background-blur";
import {
  ChatFormatService,
  ChatFormatServiceImpl,
} from "@/services/chat-format";
import { container } from "inversify-props";
import { ToastService, ToastServiceImpl } from "../services/toast";
import { INJECTION_TYPES } from "./injection-types";
export default function buildDependencyContainer(): void {
  container.bind<ToastService>(INJECTION_TYPES.TOAST).to(ToastServiceImpl);
  container
    .bind<IBackgroundBlurService>(INJECTION_TYPES.BACKGROUND_BLUR)
    .to(BackgroundBlurServiceImpl);
  container
    .bind<ChatFormatService>(INJECTION_TYPES.CHAT_FORMAT)
    .to(ChatFormatServiceImpl);
}
