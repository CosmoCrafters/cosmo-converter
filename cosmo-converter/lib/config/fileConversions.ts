import type { ConversionFormat } from "@/types/FileConversionFormats";

export const CONVERSION_MAP: Record<string, ConversionFormat[]> = {
  "image/jpeg": ["png", "webp", "pdf"],
  "image/png": ["jpg", "webp", "pdf"],
  "image/gif": ["png", "jpg", "webp"],
  "image/webp": ["png", "jpg", "pdf"],
  "application/pdf": ["docx", "txt", "png", "jpg"],
  "application/msword": ["pdf", "docx", "txt"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    "pdf",
    "txt",
    "md",
  ],
  "application/vnd.ms-excel": ["xlsx", "csv", "pdf"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
    "csv",
    "pdf",
  ],
  "text/csv": ["xlsx", "pdf"],
  "application/vnd.ms-powerpoint": ["pptx", "pdf"],
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": [
    "pdf",
  ],
  "text/plain": ["pdf", "docx", "md"],
  "text/markdown": ["pdf", "docx", "txt"],
  "application/rtf": ["pdf", "docx", "txt"],
  "application/epub+zip": ["pdf", "txt"],

  // Video formats
  "video/mp4": ["webm", "mov", "avi", "flv", "mp3"], // Extract audio to mp3
  "video/webm": ["mp4", "mov", "avi", "flv", "mp3"],
  "video/quicktime": ["mp4", "mov", "avi", "flv", "mp3"],
  "video/x-msvideo": ["mp4", "mov", "avi", "flv", "mp3"],
  "video/x-flv": ["mp4", "mov", "avi", "flv", "mp3"],

  // Audio formats
  "audio/mpeg": ["wav", "ogg", "flac"],
  "audio/wav": ["mp3", "ogg", "flac"],
  "audio/ogg": ["mp3", "wav", "flac"],
  "audio/aac": ["mp3", "wav", "flac"],
  "audio/flac": ["mp3", "wav", "ogg"],
};

export const MIME_TYPES: Record<ConversionFormat, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  pdf: "application/pdf",
  webp: "image/webp",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  txt: "text/plain",
  md: "text/markdown",
  csv: "text/csv",
  epub: "application/epub+zip",

  // Video MIME types
  mp4: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime",
  avi: "video/x-msvideo",
  flv: "video/x-flv",

  // Audio MIME types
  mp3: "audio/mpeg",
  wav: "audio/wav",
  ogg: "audio/ogg",
  flac: "audio/flac",
};

export const FORMAT_DESCRIPTIONS: Record<ConversionFormat, string> = {
  png: "Lossless image format with transparency support",
  jpg: "Compressed image format ideal for photographs",
  pdf: "Portable Document Format for documents and images",
  webp: "Modern image format with superior compression",
  docx: "Microsoft Word document format",
  xlsx: "Microsoft Excel spreadsheet format",
  pptx: "Microsoft PowerPoint presentation format",
  txt: "Plain text format",
  md: "Markdown text format",
  csv: "Comma-separated values for data",
  epub: "Electronic publication format for e-books",

  // Video format descriptions
  mp4: "Most widely supported video format",
  webm: "Open-source video format with good compression",
  mov: "Apple QuickTime video format",
  avi: "Microsoft Audio Video Interleave format",
  flv: "Flash Video format",

  // Audio format descriptions
  mp3: "Popular compressed audio format",
  wav: "Uncompressed audio format with high quality",
  ogg: "Open-source audio format",
  flac: "Free Lossless Audio Codec format",
};
