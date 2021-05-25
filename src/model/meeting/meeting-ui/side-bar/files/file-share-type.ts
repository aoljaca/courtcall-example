import { ShareType } from "./file-share";

interface FileShareType {
  type: ShareType;
  label: string;
}

const ALL_FILE_SHARE_TYPE: FileShareType = {
  type: "all",
  label: "sidebar.files.mainView.allFiles",
};
const FILE_SHARE_TYPES: FileShareType[] = [
  {
    type: "collaboration",
    label: "sidebar.files.collaborationShare.title",
  },
  {
    type: "file",
    label: "sidebar.files.fileShare.title",
  },
  {
    type: "signature",
    label: "sidebar.files.signatureShare.title",
  },
];

export { FileShareType, FILE_SHARE_TYPES, ALL_FILE_SHARE_TYPE };
