import type { Profile } from "~/api/interface";
import type { Multilingual } from "~/multilingual";

export const PROFILE: Multilingual<Profile> = {
  aBitAboutMe: {
    ja: [
      "小6から独学でJavaと回路設計を学び、メカ開発にあこがれ趣味として電⼦⼯作を始める。",
      "中1時点でSDカード操作ライブラリを作ったり、高校では水中ドローンを作ったりする。",
      "⼤学に⼊ってからはインターンや個⼈開発でWeb系を触り、最近では競プロ向けに作ったC++のデバッグツールが獲得GitHubスター数300を超えた。",
    ].join(""),
    en: [
      "I started self-studying Java and circuit design from the 6th grade, and started electronics as a hobby with a longing for mechanical development.",
      "At the time of junior high school, I made an SD card operation library, and in high school, I made an underwater drone.",
      "After entering university, I touched Web systems with internships and personal development, and recently, the C++ debugging tool I made for competitive programming has acquired more than 300 GitHub stars.",
    ].join(" "),
  },
};
