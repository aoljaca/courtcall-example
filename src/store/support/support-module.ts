import { SupportItem } from "@/model/admin/support/support-item";
import {DateTime} from 'luxon';
const SUPPORT_QUEUE: SupportItem[] = [
  {
    type: "duplicateJoin",
    participant: "1",
    note: null,
    archived: false,
    room: "",
    requestDetails: null,
    timestamp: DateTime.now().toISO()
  },
  {
    type: "inProgress",
    participant: "2",
    note: null,
    archived: false,
    room: "",
    requestDetails: null,
    timestamp: DateTime.now().minus({minutes: 30}).toISO();
  },
  {
    type: "user",
    participant: "3",
    note: null,
    archived: false,
    room: "",
    requestDetails: "Can't screenshare",
    timestamp: DateTime.now().minus({hours: 1}).toISO()
  },
  {
    type: 'duplicateJoin',
    participant: '4',
    note: null,
    archived: false,
    room: "",
    requestDetails: null,
    timestamp: DateTime.now().minus({hours: 2}).toISO();
  }
];
