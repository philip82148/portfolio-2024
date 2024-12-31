import type { Project } from "~/api/interface";

export const PROJECTS_PARTIAL: Omit<Project, "starCount">[] = [
  {
    title: "ポートフォリオ(2024年版)",
    year: 2024,
    category: "Web",
    shortDescription: "このポートフォリオ",
    techStacks: ["Remix", "TypeScript"],
    allTechStacks: [
      "Remix",
      "React",
      "daisyUI",
      "Tailwind CSS",
      "Vite",
      "TypeScript",
      "Cloudflare Pages",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/portfolio-2024" },
      { label: "Demo", href: "https://philip82148.dev/" },
    ],
  },
  {
    title: "環境構築と開発の手順",
    year: 2023,
    category: "Other",
    shortDescription: "環境構築と開発の手順をまとめたマニュアル",
    description:
      "自分の研究室のプログラミングをしたことがない人向けに環境構築と開発の手順のマニュアルを作った。",
    links: [{ label: "GitHub", href: "https://github.com/philip82148/env-setup" }],
  },
  {
    title: "競プロ用デバッグツール「cpp-dump」",
    year: 2023,
    category: "Other",
    shortDescription: "C++でどんな型でもプリントできる関数",
    description:
      "競プロをはじめたが、C++にダンプ関数がなかったので、あらゆる型の変数を文字列表現にして標準エラー出力に出力するダンプ関数を作った。",
    techStacks: ["C++"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/cpp-dump" }],
    imgSrc: "https://github.com/philip82148/cpp-dump/raw/main/readme/cpp-dump.gif",
  },
  {
    title: "Oh My Zshテーマ「simplerich-zsh-theme」",
    year: 2023,
    category: "Other",
    techStacks: ["shell"],
    shortDescription: "Git Status等が一目でわかるOh My Zshテーマ",
    description:
      "Oh My Zshのテーマを作った。Gitの、いくつのファイルがstaged, changed, untrackedかやリモートリポジトリから何コミット前にある、後にある、という情報が一目でわかるテーマ。",
    links: [{ label: "GitHub", href: "https://github.com/philip82148/simplerich-zsh-theme/" }],
  },
  {
    title: "ポートフォリオ(2023年版)",
    year: 2023,
    category: "Web",
    shortDescription: "2023年に作ったポートフォリオ",
    description:
      "2023年に作ったポートフォリオ。デザインは拙いが、Historyのカードをクリックすると動くところはパフォーマンスチューニングしてあり、工夫点。",
    techStacks: ["Next.js", "TypeScript"],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/portfolio-2023/" },
      { label: "Demo", href: "https://philip82148.github.io/portfolio-2023/" },
    ],
  },
  {
    title: "名簿自動生成アプリ",
    year: 2023,
    category: "Web",
    shortDescription: "自治寮の寮生名簿を自動生成するアプリ",
    description:
      "自分が住んでいた自治寮で寮生の名簿を作る作業があり、電話番号や住所のフォーマットを整える作業が毎年大変だったので、自動化するプログラムを作った。",
    techStacks: ["Next.js", "TypeScript"],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/kishukusha-meibo/" },
      { label: "Demo", href: "https://philip82148.github.io/kishukusha-meibo/" },
    ],
  },
  {
    title: "LINE BOT「寄宿舎届出サポート」",
    year: 2023,
    category: "Web",
    shortDescription: "自治寮の届出をサポートするLINE BOT",
    description:
      "自分が住んでいた自治寮で必要だった各種届出を、LINE BOTで会話を行うだけで出来るようにし、出す側も確認する側も便利になるようにした。",
    techStacks: ["PHP", "MySQL"],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/kishukusha-report-supporter/" },
    ],
  },
  {
    title: "メンション生成Chrome拡張「M-GEN」",
    year: 2022,
    category: "Web",
    shortDescription:
      "Google Formsで回答しなかった人全員をメンションするメッセージ文を生成するChrome拡張",
    techStacks: ["jQuery", "JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/mention-generator/" }],
  },
  {
    title: "授業評定サイト用WordPressテーマ「selva」",
    year: 2022,
    category: "Web",
    shortDescription: "授業評定サイト用WordPressテーマ",
    description:
      "友達と二人で授業の評定サイトを作る。学部2年の時に作ったもので、デザインは拙い。各大学で使ってもらえるようWordPressテーマとして作り、管理画面でCSVを使って授業データをインポートできるようにしてある。",
    techStacks: ["WordPress", "PHP", "jQuery", "JavaScript", "MySQL"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/selva/" }],
  },
  {
    title: "水中ドローン",
    year: 2019,
    period: "高校",
    category: "Electronics",
    shortDescription: "電子工作で作った水中ドローン",
    description:
      "高校2年の文化祭で作って展示した。ブラウザ上でモーターの制御とカメラ映像が見れる。なお、水中ドローンという名目だが、水中で電波が届かないので実際には水上ドローンである。",
    techStacks: ["C", "HTML", "CSS", "JavaScript", "Python"],
  },
  {
    title: "SDカードライブラリ",
    year: 2015,
    period: "中学校",
    category: "Electronics",
    shortDescription: "電子工作で作ったSDカードライブラリ",
    description:
      "電子工作でICレコーダー用に作ったSDカードライブラリ。PICの少ないリソースでも動くようにメモリとプログラムメモリをなるだけ使わないように書いている。",
    techStacks: ["C"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/SDCardLibrary/" }],
  },
  {
    title: "ボート3台目",
    year: 2015,
    period: "中学校",
    category: "Other",
    shortDescription: "自分一人で作った3mのボート",
    description: "自分一人で3mのボートを作った。",
  },
  {
    title: "電気ショックタイマー",
    year: 2014,
    period: "中学校",
    category: "Electronics",
    shortDescription: "電子工作で作った電気ショックで時間を知らせるタイマー",
    description:
      "中毒並みに時間を忘れて作業に熱中してしまうことがあり、普通のタイマーでは作業をやめられなかったため、電気ショックで時間を知らせるタイマーを作った。",
    techStacks: ["PICアセンブラ"],
  },
  {
    title: "メモ帳",
    year: 2013,
    period: "小学校",
    category: "Other",
    shortDescription: "プログラミングで初めて作ったアプリであるメモ帳",
    description: "プログラミングで初めて作ったアプリ",
    techStacks: ["Java"],
  },
  {
    title: "ボート1台目",
    year: 2011,
    period: "小学校",
    category: "Other",
    shortDescription: "父と二人で作った人が乗れるボート",
    description: "父と二人で人が乗れるボートを作った。",
  },
];
