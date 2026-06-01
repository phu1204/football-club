import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertYoutubeUrl(url: string) {
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;

  const match = url.match(regExp);

  if (match) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }

  return url;
}

export function getIdVideo (url: string) {
  const id = url.split('v=')[1]
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}
