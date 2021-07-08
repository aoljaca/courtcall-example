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
  DataTableOptionsService,
  DataTableOptionsServiceImpl,
} from "@/services/data-table-options";
import {
  DateFormatService,
  DateFormatServiceImpl,
} from "@/services/date-format";
import {
  ParticipantSearchService,
  ParticipantSearchServiceImpl,
} from "@/services/participant-search";
import {
  ShareFormatService,
  ShareFormatServiceImpl,
} from "@/services/share-format";
import { ThemeService, ThemeServiceImpl } from "@/services/theme-service";
import {
  WebsocketConnectionService,
  WebsocketConnectionServiceImpl,
} from "@/services/websocket-connection";
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
  container
    .bind<WebsocketConnectionService>(INJECTION_TYPES.WEBSOCKET_CONNECTION)
    .to(WebsocketConnectionServiceImpl);
  container
    .bind<DataTableOptionsService>(INJECTION_TYPES.DATA_TABLE)
    .to(DataTableOptionsServiceImpl);
  container
    .bind<DateFormatService>(INJECTION_TYPES.DATE_FORMAT)
    .to(DateFormatServiceImpl);
  container
    .bind<ThemeService>(INJECTION_TYPES.THEME_SERVICE)
    .to(ThemeServiceImpl);
}
