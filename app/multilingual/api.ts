import type { Language } from "./language";
import { LANGUAGES } from "./language";

type MultilingualObject<T> = { [K in Language]: T };
const isMultilingualObject = <T>(obj: object): obj is MultilingualObject<T> => {
  return LANGUAGES.every((language) => language in obj);
};

export type Multilingual<T> = T extends string[]
  ? T | MultilingualObject<T> | MultilingualObject<T[number]>[]
  : T extends []
  ? Multilingual<T[number]>[]
  : T extends object
  ? { [K in keyof T]: Multilingual<T[K]> }
  : T extends string
  ? T | MultilingualObject<T>
  : T;

export const monolingual = <T>(obj: Multilingual<T>, lang: Language): T => {
  if (obj instanceof Array) return obj.map((item) => monolingual(item, lang)) as T;
  if (!(obj instanceof Object)) return obj as T;
  if (isMultilingualObject<T>(obj)) return obj[lang];
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, monolingual(value, lang)])
  ) as T;
};
