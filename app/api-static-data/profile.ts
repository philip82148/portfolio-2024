import type { Profile } from "~/api/interface";
import type { Multilingual } from "~/multilingual";

export const PROFILE = {
  aBitAboutMe: {
    ja: [
      "小6から独学でJavaと回路設計を学び、メカ開発にあこがれ趣味として電⼦⼯作を始める。",
      "中1時点でSDカード操作ライブラリを作ったり、高校では水中ドローンを作ったりする。",
      "⼤学に⼊ってからはインターンや個⼈開発でWeb系を触り、最近では競プロ向けに作ったC++のデバッグツールが獲得GitHubスター数300を超えた。",
    ].join(""),
    en: [
      "I began self-learning circuit design and programming in elementary school and took up electronics projects as a hobby.",
      "After entering university, I gained experience in web programming through personal projects and several internships.",
      "Recently, I created a C++ debugging tool that has earned over 300 GitHub stars.",
    ].join(" "),
  },
} as const satisfies Multilingual<Profile>;
