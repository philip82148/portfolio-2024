import type { Project } from "~/api/interface";
import type { Multilingual } from "~/multilingual";

export const PROJECTS = [
  {
    title: { ja: "ポートフォリオ(2024年版)", en: "Portfolio(2024)" },
    period: "2024",
    category: "Web",
    summary: { ja: "このポートフォリオ", en: "This portfolio" },
    descriptions: [
      {
        ja: "2024年に作ったポートフォリオ。2023年に作ったポートフォリオに比べて(自分でした)デザインが改善している(と思う)。",
        en: "Portfolio made in 2024. Compared to the portfolio made in 2023, the design has been improved.",
      },
      {
        ja: "Skillsのところはオリジナルでフィルターしてソートするアルゴリズムを実装している。",
        en: "In the Skills section, I have implemented an algorithm that filters and sorts the original.",
      },
      {
        ja: "なお、まだ加えたい機能やデザインの改善をしたいと思っているため、未完成である。",
        en: "However, it is still incomplete because I want to add more features and improve the design.",
      },
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
    title: {
      ja: "図解入門TCP/IP - 仕組み・動作が見てわかる",
      en: "Illustrated TCP/IP Introduction",
    },
    period: "2024",
    category: "Book",
    summary: {
      ja: "ネットワークの仕組みを学ぶために読んだ本",
      en: "A book I read to learn about networks",
    },
    descriptions: [
      {
        ja: "「ソフトウェアエンジニアリング協会」というコミュニティの勉強会にてネットワークについて学ぶために読んだ本。",
        en: "A book I read to learn about networks at a study session of the Software Engineering Association.",
      },
      {
        ja: "「マスタリング TCP/IP」も持っているが、こちらの方が分かりやすかった。",
        en: "I also have 'Mastering TCP/IP', but this one was easier to understand.",
      },
    ],
    links: [{ label: "Book", href: "https://amzn.asia/d/8YOFGLX" }],
    imgSrc: "/projects/books/tcp-ip.jpg",
  },
  {
    title: {
      ja: "工学基礎シリーズ オペレーティングシステム",
      en: "Engineering Basics Series Operating System",
    },
    period: "2024",
    category: "Book",
    summary: {
      ja: "一般のOSの仕組みについて学ぶために読んだ本",
      en: "A book I read to learn about the general structure of OS",
    },
    descriptions: [
      {
        ja: "「ソフトウェアエンジニアリング協会」というコミュニティの勉強会にてOSについて学ぶために読んだ本。",
        en: "A book I read to learn about OS at a study session of the Software Engineering Association.",
      },
      {
        ja: [
          "「30日でできる！OS自作入門」を読んでいたおかげで理解が早かった。",
          "また、この本を読んだ時に感じていた「この本ではこうしているけど、普通のOSはどうしているんだろう」といった疑問や「現代のOSにある他の機能はどう実装されているのだろう」といった疑問がこの本では解消されている。",
        ].join(""),
        en: [
          "Thanks to reading '30 Days to Make an OS', I understood it quickly.",
          "Also, the questions I had when reading this book, such as 'This book does this, but how does a normal OS do it?' and 'How are other features in modern OSs implemented?', are resolved in this book.",
        ].join(""),
      },
    ],
    links: [{ label: "Book", href: "https://amzn.asia/d/7DvbLSD" }],
    imgSrc: "/projects/books/os-fundamental.jpg",
  },
  {
    title: { ja: "30日でできる！OS自作入門", en: "30 Days to Make an OS" },
    period: "2024",
    category: "Book",
    summary: {
      ja: "OSの実装について学ぶために読み、実装した本",
      en: "A book I read to learn about OS implementation and implemented",
    },
    descriptions: [
      {
        ja: "OSの仕組みを知りたいと思い立ち、この本を読んで作ってみた。",
        en: "I wanted to know how OS works, so I read this book and made it.",
      },
      {
        ja: "古い本なので現代では使えない技術もあったが、そこを試行錯誤しながら作っている。Zennのスクラップはその試行錯誤の過程と理解を深めるためのメモとして書いた。",
        en: "There were some technologies that are not available in modern times because it is an old book, but I made it while trial and error. The scraps on Zenn are notes for the trial and error process and deepening understanding.",
      },
      {
        ja: "本の内容は非常に勉強になり、Web開発にも役立ちそうだと感じた。",
        en: "The content of the book was very informative, and I felt it would be useful for web development.",
      },
      {
        ja: "ただ、現代のOSはもっと高機能であり、それらについて学べなかったので、それを「工学基礎シリーズ オペレーティングシステム」を読むことで補完している。",
        en: "However, modern OSs are more advanced, and I couldn't learn about them, so I complemented them by reading 'Engineering Basics Series Operating System'.",
      },
    ],
    links: [
      { label: "Book", href: "https://amzn.asia/d/daydn1j" },
      { label: "GitHub", href: "https://github.com/philip82148/os-30days" },
      { label: "Zenn", href: "https://zenn.dev/sassan/scraps/28f5277ce2bda0" },
    ],
    imgSrc: "/projects/books/os-30days.jpg",
  },
  {
    title: {
      ja: "環境構築と開発の手順",
      en: "Manual for environment construction and development",
    },
    period: "2023",
    category: "Other",
    summary: {
      ja: "環境構築と開発の手順をまとめたマニュアル",
      en: "Manual that summarizes the procedure for environment construction and development",
    },
    descriptions: [
      {
        ja: "自分の研究室のプログラミングをしたことがない人向けに環境構築と開発の手順のマニュアルを作った。",
        en: "I created a manual for setting up the environment and developing for those who have never programmed in my laboratory.",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/env-setup" }],
  },
  {
    title: {
      ja: "競プロ用デバッグツール「cpp-dump」",
      en: 'Debug tool for competitive programming "cpp-dump"',
    },
    period: "2023",
    category: "Other",
    summary: {
      ja: "C++でどんな型でもプリントできる関数",
      en: "A function that can print any type in C++",
    },
    descriptions: [
      {
        ja: "Pythonのprint()、JavaScriptのconsole.log()のように、C++でどんな型でもプリントできる関数。",
        en: "A function that can print any type in C++ like Python's print() and JavaScript's console.log().",
      },
      {
        ja: "競プロをはじめたが、C++にそのような関数がなく、デバッグが不便だった(時間がかかっていた)ので作った。",
        en: "I started competitive programming, but there was no such function in C++, so I made it because debugging was inconvenient (time-consuming).",
      },
      {
        ja: "OSSとして公開し、告知にも力を入れた。",
        en: "I released it as OSS and put a lot of effort into the announcement.",
      },
    ],
    mainTechStacks: ["C++"],
    allTechStacks: ["C++", "CMake", "g++", "clang++", "MSVC", "GitHub Actions"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/cpp-dump" }],
    imgSrc: "/projects/other/cpp-dump.jpg",
  },
  {
    title: {
      ja: "Oh My Zshテーマ「simplerich-zsh-theme」",
      en: "Oh My Zsh theme 'simplerich-zsh-theme'",
    },
    period: "2023",
    category: "Other",
    mainTechStacks: ["Shell Script"],
    allTechStacks: ["Oh My Zsh", "Zsh", "Shell Script"],
    summary: {
      ja: "Git Status等が一目でわかるOh My Zshテーマ",
      en: "Oh My Zsh theme that shows Git Status etc. at a glance",
    },
    descriptions: [
      {
        ja: "Gitの、いくつのファイルがstaged, changed, untrackedかやリモートリポジトリから何コミット前にある、後にある、という情報が一目でわかるOh My Zsh(Zshを見やすくするツール)のテーマ。",
        en: "An Oh My Zsh (a tool that makes Zsh easier to read) theme that shows at a glance how many files are staged, changed, untracked in Git, how many commits are ahead of and behind the remote repository, etc.",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/simplerich-zsh-theme" }],
    imgSrc: "/projects/other/simplerich-zsh-theme.jpg",
  },
  {
    title: { ja: "ポートフォリオ(2023年版)", en: "Portfolio(2023)" },
    period: "2023",
    category: "Web",
    summary: { ja: "2023年に作ったポートフォリオ", en: "Portfolio made in 2023" },
    descriptions: [
      {
        ja: "2023年に作ったポートフォリオ。(自分で行った)デザインよりもパフォーマンスチューニングしているHistoryのカードをクリックすると動く工夫点を見てほしい。",
        en: "Portfolio made in 2023. Please click on the History card to see the moving points that are tuned for performance rather than the design I did.",
      },
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
    imgSrc: "/projects/web/portfolio-2023.jpg",
  },
  {
    title: { ja: "ノンデザイナーズ・デザインブック", en: "The Non-Designer's Design Book" },
    period: "2023",
    category: "Book",
    summary: {
      ja: "Webサイトの見た目を良くするために読んだ本",
      en: "A book I read to improve the look of my website",
    },
    descriptions: [
      {
        ja: "個人開発の時のWebサイトの見た目を良くしたいと思って読んだ本。",
        en: "I read this book because I wanted to improve the look of my website when developing it personally.",
      },
    ],
    links: [{ label: "Book", href: "https://amzn.asia/d/hcrXhOw" }],
    imgSrc: "/projects/books/non-designer.jpg",
  },
  {
    title: { ja: "名簿自動生成アプリ", en: "Automatic roster generation app" },
    period: "2023",
    category: "Web",
    summary: {
      ja: "自治寮の寮生名簿を自動生成するアプリ",
      en: "App that automatically generates a list of dormitory residents",
    },
    descriptions: [
      {
        ja: "自分が住んでいた自治寮で寮生の名簿を作る作業があり、電話番号や住所のフォーマットを整える作業が毎年大変だったので、自動化するプログラムを作った。",
        en: "There was a task to create a list of dormitory residents in the dormitory where I lived, and it was difficult every year to format phone numbers and addresses, so I created a program to automate it.",
      },
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
    imgSrc: "/projects/web/kishukusha-meibo.jpg",
  },
  {
    title: { ja: "LINE BOT「寄宿舎届出サポート」", en: "LINE BOT 'Kishukusha Report Supporter'" },
    period: "2023",
    category: "Web",
    summary: {
      ja: "自治寮の届出をサポートするLINE BOT",
      en: "LINE BOT that supports dormitory reports",
    },
    descriptions: [
      {
        ja: "自分が住んでいた自治寮で必要だった各種届出を、LINE BOTで会話を行うだけで出来るようにし、出す側も確認する側も便利になるようにした。",
        en: "Various reports required in the dormitory where I lived can be done by simply talking with the LINE BOT, making it convenient for both the submitter and the checker.",
      },
      {
        ja: "届出内容はGoogle Driveに自動で保存されるようになっている。また、届出内容の一部チェック機能付き。",
        en: "The report contents are automatically saved to Google Drive. Also, part of the report content is checked.",
      },
    ],
    mainTechStacks: ["PHP"],
    allTechStacks: ["PHP", "MySQL", "LINE Messaging API", "GCP"],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/kishukusha-report-supporter/" },
    ],
    imgSrc: "/projects/web/kishukusha-supporter.jpg",
  },
  {
    title: {
      ja: "メンション生成Chrome拡張「M-GEN」",
      en: "Mention generation Chrome extension 'M-GEN'",
    },
    period: "2022",
    category: "Web",
    summary: {
      ja: "Google Formsで回答しなかった人のメンション文を生成するChrome拡張",
      en: "Chrome extension that generates mention sentences for people who did not respond to Google Forms",
    },
    descriptions: [
      {
        ja: "自分が住んでいた自治寮でアンケートに回答しなかった人全員をLINEでメンションする文化があり、手作業で回答していない人を調べてメンションするのは大変なので、自動化するChrome拡張を作った。",
        en: "There is a culture in the dormitory where I lived that everyone who did not respond to the questionnaire is mentioned on LINE, and it is difficult to manually investigate and mention those who did not respond, so I created a Chrome extension to automate it.",
      },
      {
        ja: "なお、これを含めこれ以前は生のHTMLとCSS、JavaScriptでアプリを作っていた。",
        en: "Note that before this, I was creating apps with raw HTML, CSS, and JavaScript.",
      },
    ],
    mainTechStacks: ["jQuery", "JavaScript"],
    allTechStacks: ["jQuery", "JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/mention-generator/" }],
    imgSrc: "/projects/web/m-gen.jpg",
  },
  {
    title: {
      ja: "授業評定サイト用WordPressテーマ「selva」",
      en: "WordPress theme for class evaluation site 'selva'",
    },
    period: "2022",
    category: "Web",
    summary: {
      ja: "授業評定サイト用WordPressテーマ",
      en: "WordPress theme for class evaluation site",
    },
    descriptions: [
      {
        ja: "友達と二人で授業の評定サイトを作る。学部2年の時に作ったもので、いつかデザインを改善したいと思っている。自分はホームページ(トップページ)以外を担当。",
        en: "I made a class evaluation site with a friend. I made it in my second year of college, and I want to improve the design someday. I am in charge of everything except the homepage.",
      },
      {
        ja: "各大学で使ってもらえるようWordPressテーマとして作り、管理画面でCSVを使って授業データをインポートできるようにしてある。",
        en: "I made it as a WordPress theme so that it can be used at each university, and you can import class data using CSV in the management screen.",
      },
      {
        ja: "なお、技術スタックのPythonはWebスクレイピング用。",
        en: "Note that Python in the technology stack is for web scraping.",
      },
      {
        ja: "※デモサイトのサーバーの契約が切れたので再度準備中。",
        en: "*The contract for the demo site server has expired, so it is being prepared again.",
      },
    ],
    mainTechStacks: ["WordPress", "PHP"],
    allTechStacks: ["WordPress", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/selva/" }],
  },
  {
    title: { ja: "リーダブルコード", en: "Readable Code" },
    period: "2022",
    category: "Book",
    summary: { ja: "より良いコードを書くために読んだ本", en: "A book I read to write better code" },
    descriptions: [{ ja: "説明不要の名著。", en: "A masterpiece that needs no explanation." }],
    links: [{ label: "Book", href: "https://amzn.asia/d/5Ermg8D" }],
    imgSrc: "/projects/books/readable-code.jpg",
  },
  {
    title: { ja: "水中ドローン", en: "Underwater Drone" },
    period: { ja: "高校", en: "High School" },
    category: "Electronics",
    summary: {
      ja: "文化祭で展示した水中ドローン",
      en: "Underwater drone exhibited at the school festival",
    },
    descriptions: [
      {
        ja: "高校2年の文化祭で作って展示した。ブラウザ上でモーターの制御とカメラ映像が見れるようになっている。",
        en: "I made it and exhibited it at the school festival in my second year of high school. You can control the motor and see the camera image on the browser.",
      },
    ],
    mainTechStacks: ["C", "JavaScript"],
    allTechStacks: ["C", "JavaScript", "HTML", "CSS", "Python"],
    imgSrc: "/projects/electronics/underwater-drone.jpg",
  },
  {
    title: { ja: "SDカードライブラリ", en: "SD Card Library" },
    period: { ja: "中学校", en: "Junior High School" },
    category: "Electronics",
    summary: {
      ja: "電子工作で作ったSDカードライブラリ",
      en: "SD card library made in electronic work",
    },
    descriptions: [
      {
        ja: "電子工作でICレコーダー用に作ったSDカードライブラリ。PICの少ないリソースでも動くようにメモリとプログラムメモリをなるだけ使わないように書いている。",
        en: "An SD card library made for an IC recorder in electronic work. It is written to use as little memory and program memory as possible so that it works even with few resources of PIC.",
      },
    ],
    mainTechStacks: ["C"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/SDCardLibrary/" }],
  },
  {
    title: { ja: "ボート3台目", en: "Third Boat" },
    period: { ja: "中学校", en: "Junior High School" },
    category: "Other",
    summary: { ja: "自分一人で作った3mのボート", en: "A 3m boat made by myself" },
    descriptions: [
      {
        ja: "小5のときから作っていたボートの集大成。今度は自分一人で3mのボートを作った。",
        en: "The culmination of the boat I had been making since I was in the fifth grade. This time, I made a 3m boat by myself.",
      },
      { ja: "なお、写真は製作途中のもの。", en: "The photo is still in progress." },
    ],
    imgSrc: "/projects/other/third-boat-wip.jpg",
  },
  {
    title: { ja: "電気ショックタイマー", en: "Electric Shock Timer" },
    period: { ja: "中学校", en: "Junior High School" },
    category: "Electronics",
    summary: {
      ja: "電子工作で作った電気ショックで時間を知らせるタイマー",
      en: "Timer that tells the time with an electric shock made in electronic work",
    },
    descriptions: [
      {
        ja: [
          "中毒並みに時間を忘れて作業に熱中してしまうことがあり、普通のタイマーでは作業をやめられなかったため、電気ショックで時間を知らせるタイマーを作った。",
          "腕時計型で、肌につく部分に電気を流す端子が付いている。",
        ].join(""),
        en: [
          "I sometimes forget the time and get absorbed in my work to the point of addiction, and I couldn't stop working with a normal timer, so I made a timer that tells the time with an electric shock.",
          "It is a wristwatch type with a terminal that sends electricity to the part that touches the skin.",
        ].join(""),
      },
      { ja: "なお、写真は現在準備中。", en: "The photo is still in progress." },
    ],
    mainTechStacks: [{ ja: "PICアセンブラ", en: "PIC Assembly" }],
    imgSrc: "/projects/electronics/electric-shock-timer-illustration.jpg",
  },
  {
    title: { ja: "メモ帳", en: "Notepad" },
    period: { ja: "小学校", en: "Elementary School" },
    category: "Other",
    summary: {
      ja: "プログラミングで初めて作ったアプリ",
      en: "The first app I made with programming",
    },
    descriptions: [
      "10日でおぼえるJava入門教室という本を読み、小6の時に始めてプログラミングで初めて作ったアプリ。",
    ],
    mainTechStacks: ["Java"],
    imgSrc: "/projects/other/self-made-editor.jpg",
  },
  {
    title: { ja: "ボート1台目", en: "First Boat" },
    period: { ja: "小学校", en: "Elementary School" },
    category: "Other",
    summary: { ja: "父と二人で作った人が乗れるボート", en: "A boat that my father and I made" },
    descriptions: [
      {
        ja: "佐々木家が昔造船所だったということで、ボートを作ってみようという話になり、小5のとき父と二人で人が乗れるボートを作った。",
        en: "The Sasaki family used to be a shipyard, so my father and I decided to make a boat that people can ride in my fifth grade.",
      },
    ],
    imgSrc: "/projects/other/first-boat.jpg",
  },
] as const satisfies Multilingual<Omit<Project, "id" | "starCount" | "forkCount">>[];
