import { ShareType } from "./file-share";

interface FileShareType {
  type: ShareType;
  label: string;
}

const FILE_SHARE_TYPES: FileShareType[] = [
  {
    type: "collaboration",
    label: "sidebar.files.collaboration",
  },
  {
    type: "file",
    label: "sidebar.files.sharedFile",
  },
  {
    type: "signature",
    label: "sidebar.files.eSignature",
  },
];

export { FileShareType, FILE_SHARE_TYPES };
