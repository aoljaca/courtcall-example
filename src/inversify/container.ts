import {
  BackgroundBlurServiceImpl,
  IBackgroundBlurService,
} from "@/services/background-blur";
import {
  CaseFormatService,
  CaseFormatServiceImpl,
} from "@/services/case-format";
import {
  ChatFormatService,
  ChatFormatServiceImpl,
} from "@/services/chat-format";
import {
  ParticipantSearchService,
  ParticipantSearchServiceImpl,
} from "@/services/participant-search";
import {
  ShareFormatService,
  ShareFormatServiceImpl,
} from "@/services/share-format";
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
  container
    .bind<CaseFormatService>(INJECTION_TYPES.CASE_FORMAT)
    .to(CaseFormatServiceImpl);
  container
    .bind<ShareFormatService>(INJECTION_TYPES.SHARE_FORMAT)
    .to(ShareFormatServiceImpl);

  container
    .bind<ParticipantSearchService>(INJECTION_TYPES.PARTICIPANT_SEARCH)
    .to(ParticipantSearchServiceImpl);
}
