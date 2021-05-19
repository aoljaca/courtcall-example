type ShareType = "file" | "signature" | "collaboration" | "all";
type SignatureType = "docusign" | "adobesign";
interface Share {
  type: ShareType;
  ownerId: string;
  opened: boolean;
  id: string;
  participants: string[];
  fileName: string;
}

interface FileShare extends Share {
  type: "file";
}

interface CollaborationShare extends Share {
  type: "collaboration";
  jwt: string;
}

interface SignatureShare extends Share {
  type: "signature";
  signatureType: SignatureType;
  signed: string[];
}

export {
  ShareType,
  SignatureType,
  Share,
  FileShare,
  CollaborationShare,
  SignatureShare,
};
