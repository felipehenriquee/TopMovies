import { MediaType } from "../models/mediaType.enum";

export class Generics {
  getImagePath(img: string): string {
    return `https://image.tmdb.org/t/p/original${img}`;
  }
  getMediaTypeValue(key: string): string {
    key = key.toUpperCase();
    if (key in MediaType) {
      return MediaType[key as keyof typeof MediaType];
    } else {
      return key;
    }
  }
}
