import type { Project } from "~/api/interface";

export const PROJECTS_PARTIAL: Omit<Project, "starCount" | "forkCount">[] = [
  {
    title: "ポートフォリオ(2024年版)",
    period: "2024",
    category: "Web",
    summary: "このポートフォリオ",
    descriptions: [
      "2024年に作ったポートフォリオ。2023年に作ったポートフォリオに比べて(自分でした)デザインが改善している(と思う)。",
      "Skillsのところはオリジナルでフィルターしてソートするアルゴリズムを実装している。",
      "なお、まだ加えたい機能やデザインの改善をしたいと思っているため、未完成である。",
    ],
    mainTechStacks: ["Remix", "TypeScript"],
    allTechStacks: [
      "Remix",
      "React",
      "TypeScript",
      "ESlint",
      "Prettier",
      "daisyUI",
      "Tailwind CSS",
      "Vite",
      "npm",
      "GitHub Actions",
      "Cloudflare Pages",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/portfolio-2024" },
      { label: "Demo", href: "https://philip82148.dev/" },
    ],
  },
  {
    title: "図解入門TCP/IP - 仕組み・動作が見てわかる",
    period: "2024",
    category: "Book",
    summary: "ネットワークの仕組みを学ぶために読んだ本",
    descriptions: [
      "「ソフトウェアエンジニアリング協会」というコミュニティの勉強会にてネットワークについて学ぶために読んだ本。",
      "「マスタリング TCP/IP」も持っているが、こちらの方が分かりやすかった。",
    ],
    links: [{ label: "Book", href: "https://amzn.asia/d/8YOFGLX" }],
    imgSrc: "/projects/books/tcp-ip.jpg",
  },
  {
    title: "工学基礎シリーズ オペレーティングシステム",
    period: "2024",
    category: "Book",
    summary: "一般のOSの仕組みについて学ぶために読んだ本",
    descriptions: [
      "「ソフトウェアエンジニアリング協会」というコミュニティの勉強会にてOSについて学ぶために読んだ本。",
      [
        "「30日でできる！OS自作入門」を読んでいたおかげで理解が早かった。",
        "また、この本を読んだ時に感じていた「この本ではこうしているけど、普通のOSはどうしているんだろう」といった疑問や「現代のOSにある他の機能はどう実装されているのだろう」といった疑問がこの本では解消されている。",
      ].join(""),
    ],
    links: [{ label: "Book", href: "https://amzn.asia/d/7DvbLSD" }],
    imgSrc: "/projects/books/os-fundamental.jpg",
  },
  {
    title: "30日でできる！OS自作入門",
    period: "2024",
    category: "Book",
    summary: "OSの実装について学ぶために読み、実装した本",
    descriptions: [
      "OSの仕組みを知りたいと思い立ち、この本を読んで作ってみた。",
      "古い本なので現代では使えない技術もあったが、そこを試行錯誤しながら作っている。Zennのスクラップはその試行錯誤の過程と理解を深めるためのメモとして書いた。",
      "本の内容は非常に勉強になり、Web開発にも役立ちそうだと感じた。",
      "ただ、現代のOSはもっと高機能であり、それらについて学べなかったので、それを「工学基礎シリーズ オペレーティングシステム」を読むことで補完している。",
    ],
    links: [
      { label: "Book", href: "https://amzn.asia/d/daydn1j" },
      { label: "GitHub", href: "https://github.com/philip82148/os-30days" },
      { label: "Zenn", href: "https://zenn.dev/sassan/scraps/28f5277ce2bda0" },
    ],
    imgSrc: "/projects/books/os-30days.png",
  },
  {
    title: "環境構築と開発の手順",
    period: "2023",
    category: "Other",
    summary: "環境構築と開発の手順をまとめたマニュアル",
    descriptions: [
      "自分の研究室のプログラミングをしたことがない人向けに環境構築と開発の手順のマニュアルを作った。",
    ],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/env-setup" }],
  },
  {
    title: "競プロ用デバッグツール「cpp-dump」",
    period: "2023",
    category: "Other",
    summary: "C++でどんな型でもプリントできる関数",
    descriptions: [
      "Pythonのprint()、JavaScriptのconsole.log()のように、C++でどんな型でもプリントできる関数。",
      "競プロをはじめたが、C++にそのような関数がなく、デバッグが不便だった(時間がかかっていた)ので作った。",
      "OSSとして公開し、告知にも力を入れた。",
    ],
    mainTechStacks: ["C++"],
    allTechStacks: ["C++", "CMake", "g++", "clang++", "MSVC", "GitHub Actions"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/cpp-dump" }],
    imgSrc: "/projects/other/cpp-dump.png",
  },
  {
    title: "Oh My Zshテーマ「simplerich-zsh-theme」",
    period: "2023",
    category: "Other",
    mainTechStacks: ["Shell Script"],
    allTechStacks: ["Oh My Zsh", "Zsh", "Shell Script"],
    summary: "Git Status等が一目でわかるOh My Zshテーマ",
    descriptions: [
      "Gitの、いくつのファイルがstaged, changed, untrackedかやリモートリポジトリから何コミット前にある、後にある、という情報が一目でわかるOh My Zsh(Zshを見やすくするツール)のテーマ。",
    ],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/simplerich-zsh-theme" }],
    imgSrc: "/projects/other/simplerich-zsh-theme.png",
  },
  {
    title: "ポートフォリオ(2023年版)",
    period: "2023",
    category: "Web",
    summary: "2023年に作ったポートフォリオ",
    descriptions: [
      "2023年に作ったポートフォリオ。(自分で行った)デザインよりもパフォーマンスチューニングしているHistoryのカードをクリックすると動く工夫点を見てほしい。",
    ],
    mainTechStacks: ["Next.js", "TypeScript"],
    allTechStacks: [
      "Next.js",
      "React",
      "TypeScript",
      "ESlint",
      "Prettier",
      "Material UI",
      "yarn",
      "GitHub Actions",
      "GitHub Pages",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/portfolio-2023/" },
      { label: "Demo", href: "https://philip82148.github.io/portfolio-2023/" },
    ],
    imgSrc: "/projects/web/portfolio-2023.png",
  },
  {
    title: "ノンデザイナーズ・デザインブック",
    period: "2023",
    category: "Book",
    summary: "Webサイトの見た目を良くするために読んだ本",
    descriptions: ["個人開発の時のWebサイトの見た目を良くしたいと思って読んだ本。"],
    links: [{ label: "Book", href: "https://amzn.asia/d/hcrXhOw" }],
    imgSrc: "/projects/books/non-designer.jpg",
  },
  {
    title: "名簿自動生成アプリ",
    period: "2023",
    category: "Web",
    summary: "自治寮の寮生名簿を自動生成するアプリ",
    descriptions: [
      "自分が住んでいた自治寮で寮生の名簿を作る作業があり、電話番号や住所のフォーマットを整える作業が毎年大変だったので、自動化するプログラムを作った。",
    ],
    mainTechStacks: ["Next.js", "TypeScript"],
    allTechStacks: [
      "Next.js",
      "React",
      "TypeScript",
      "ESlint",
      "Prettier",
      "Material UI",
      "yarn",
      "GitHub Actions",
      "GitHub Pages",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/kishukusha-meibo/" },
      { label: "Demo", href: "https://philip82148.github.io/kishukusha-meibo/" },
    ],
    imgSrc: "/projects/web/kishukusha-meibo.png",
  },
  {
    title: "LINE BOT「寄宿舎届出サポート」",
    period: "2023",
    category: "Web",
    summary: "自治寮の届出をサポートするLINE BOT",
    descriptions: [
      "自分が住んでいた自治寮で必要だった各種届出を、LINE BOTで会話を行うだけで出来るようにし、出す側も確認する側も便利になるようにした。",
      "届出内容はGoogle Driveに自動で保存されるようになっている。また、届出内容の一部チェック機能付き。",
    ],
    mainTechStacks: ["PHP"],
    allTechStacks: ["PHP", "MySQL", "LINE Messaging API", "GCP"],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/kishukusha-report-supporter/" },
    ],
    imgSrc: "/projects/web/kishukusha-supporter.png",
  },
  {
    title: "メンション生成Chrome拡張「M-GEN」",
    period: "2022",
    category: "Web",
    summary: "Google Formsで回答しなかった人のメンション文を生成するChrome拡張",
    descriptions: [
      "自分が住んでいた自治寮でアンケートに回答しなかった人全員をLINEでメンションする文化があり、手作業で回答していない人を調べてメンションするのは大変なので、自動化するChrome拡張を作った。",
      "なお、これを含めこれ以前は生のHTMLとCSS、JavaScriptでアプリを作っていた。",
    ],
    mainTechStacks: ["jQuery", "JavaScript"],
    allTechStacks: ["jQuery", "JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/mention-generator/" }],
    imgSrc: "/projects/web/m-gen.png",
  },
  {
    title: "授業評定サイト用WordPressテーマ「selva」",
    period: "2022",
    category: "Web",
    summary: "授業評定サイト用WordPressテーマ",
    descriptions: [
      "友達と二人で授業の評定サイトを作る。学部2年の時に作ったもので、いつかデザインを改善したいと思っている。自分はホームページ(トップページ)以外を担当。",
      "各大学で使ってもらえるようWordPressテーマとして作り、管理画面でCSVを使って授業データをインポートできるようにしてある。",
      "なお、技術スタックのPythonはWebスクレイピング用。",
      "※デモサイトのサーバーの契約が切れたので再度準備中。",
    ],
    mainTechStacks: ["WordPress", "PHP"],
    allTechStacks: ["WordPress", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/selva/" }],
  },
  {
    title: "リーダブルコード",
    period: "2022",
    category: "Book",
    summary: "より良いコードを書くために読んだ本",
    descriptions: ["説明不要の名著。"],
    links: [{ label: "Book", href: "https://amzn.asia/d/5Ermg8D" }],
    imgSrc: "/projects/books/readable-code.jpg",
  },
  {
    title: "水中ドローン",
    period: "高校",
    category: "Electronics",
    summary: "文化祭で展示した水中ドローン",
    descriptions: [
      "高校2年の文化祭で作って展示した。ブラウザ上でモーターの制御とカメラ映像が見れるようになっている。",
    ],
    mainTechStacks: ["C", "JavaScript"],
    allTechStacks: ["C", "JavaScript", "HTML", "CSS", "Python"],
    imgSrc: "/projects/electronics/underwater-drone.jpg",
  },
  {
    title: "SDカードライブラリ",
    period: "中学校",
    category: "Electronics",
    summary: "電子工作で作ったSDカードライブラリ",
    descriptions: [
      "電子工作でICレコーダー用に作ったSDカードライブラリ。PICの少ないリソースでも動くようにメモリとプログラムメモリをなるだけ使わないように書いている。",
    ],
    mainTechStacks: ["C"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/SDCardLibrary/" }],
  },
  {
    title: "ボート3台目",
    period: "中学校",
    category: "Other",
    summary: "自分一人で作った3mのボート",
    descriptions: ["自分一人で3mのボートを作った。"],
  },
  {
    title: "電気ショックタイマー",
    period: "中学校",
    category: "Electronics",
    summary: "電子工作で作った電気ショックで時間を知らせるタイマー",
    descriptions: [
      "中毒並みに時間を忘れて作業に熱中してしまうことがあり、普通のタイマーでは作業をやめられなかったため、電気ショックで時間を知らせるタイマーを作った。",
    ],
    mainTechStacks: ["PICアセンブラ"],
  },
  {
    title: "メモ帳",
    period: "小学校",
    category: "Other",
    summary: "プログラミングで初めて作ったアプリ",
    descriptions: [
      "10日でおぼえるJava入門教室という本を読み、小6の時に始めてプログラミングで初めて作ったアプリ。",
    ],
    mainTechStacks: ["Java"],
    imgSrc: "/projects/other/self-made-editor.png",
  },
  {
    title: "ボート1台目",
    period: "小学校",
    category: "Other",
    summary: "父と二人で作った人が乗れるボート",
    descriptions: [
      "佐々木家が昔造船所だったということで、ボートを作ってみようという話になり、父と二人で人が乗れるボートを作った。",
    ],
    imgSrc: "/projects/other/first-boat.jpg",
  },
];
