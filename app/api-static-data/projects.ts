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
        en: "A portfolio I created in 2024. Compared to the portfolio I made in 2023, the design (done by myself) has been improved.",
      },
      {
        ja: "Skillsのところはオリジナルでフィルターしてソートするアルゴリズムを実装している。",
        en: 'For the "Skills" section, I implemented an original algorithm for filtering and sorting skills.',
      },
      {
        ja: "なお、まだ加えたい機能やデザインの改善をしたいと思っているため、未完成である。",
        en: "However, since there are still features I want to add and design improvements I’d like to make, the portfolio is currently a work in progress.",
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
      en: "Illustrated Introduction to TCP/IP",
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
        en: 'A book I read to learn about networking during a study group hosted by a community called the "Software Engineering Association."',
      },
      {
        ja: "「マスタリング TCP/IP」も持っているが、こちらの方が分かりやすかった。",
        en: "I’ve also read Mastering TCP/IP, but I found this book to be easier to understand.",
      },
    ],
    links: [{ label: "Book", href: "https://amzn.asia/d/8YOFGLX" }],
    imgSrc: "/projects/books/tcp-ip.jpg",
  },
  {
    title: {
      ja: "工学基礎シリーズ オペレーティングシステム",
      en: "Operating System",
    },
    period: "2024",
    category: "Book",
    summary: {
      ja: "一般のOSの仕組みについて学ぶために読んだ本",
      en: "A book I read to learn about the mechanisms of general operating systems",
    },
    descriptions: [
      {
        ja: "「ソフトウェアエンジニアリング協会」というコミュニティの勉強会にてOSについて学ぶために読んだ本。",
        en: 'A book I read to learn about operating systems as part of a study group in the "Software Engineering Association" community.',
      },
      {
        ja: [
          "「30日でできる！OS自作入門」を読んでいたおかげで理解が早かった。",
          "また、この本を読んだ時に感じていた「この本ではこうしているけど、普通のOSはどうしているんだろう」といった疑問や「現代のOSにある他の機能はどう実装されているのだろう」といった疑問がこの本では解消されている。",
        ].join(""),
        en: [
          "Thanks to having read 30 Days to Build Your Own Operating System, I was able to grasp the concepts more quickly.",
          'This book also answered questions I had while reading the previous one, such as "Why does the book take this approach, and how do typical operating systems handle this?" as well as "How are other features found in modern operating systems implemented?"',
        ].join(""),
      },
    ],
    links: [{ label: "Book", href: "https://amzn.asia/d/7DvbLSD" }],
    imgSrc: "/projects/books/os-fundamental.jpg",
  },
  {
    title: {
      ja: "30日でできる！OS自作入門",
      en: "Make it in 30 days! Introduction to self-made OS",
    },
    period: "2024",
    category: "Book",
    summary: {
      ja: "OSの実装について学ぶために読み、実装した本",
      en: "A book I read and implemented to learn about operating system implementation.",
    },
    descriptions: [
      {
        ja: "OSの仕組みを知りたいと思い立ち、この本を読んで作ってみた。",
        en: "I became interested in learning how operating systems work, so I read this book and decided to implement it.",
      },
      {
        ja: "古い本なので現代では使えない技術もあったが、そこを試行錯誤しながら作っている。Zennのスクラップはその試行錯誤の過程と理解を深めるためのメモとして書いた。",
        en: "Since it's an old book, some of the technologies are outdated, but I worked through these issues with trial and error. The Zenn scrap notes were written as a record of that process and to deepen my understanding.",
      },
      {
        ja: "本の内容は非常に勉強になり、Web開発にも役立ちそうだと感じた。",
        en: "The content of the book was very educational, and I feel it will also be useful for web development.",
      },
      {
        ja: "ただ、現代のOSはもっと高機能であり、それらについて学べなかったので、それを「工学基礎シリーズ オペレーティングシステム」を読むことで補完している。",
        en: "However, modern operating systems are much more advanced, and I couldn’t learn about them from this book. I am supplementing that knowledge by reading Engineering Fundamentals Series: Operating Systems.",
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
      en: "Manuals for Environment setup and development procedures",
    },
    period: "2023",
    category: "Other",
    summary: {
      ja: "環境構築と開発の手順をまとめたマニュアル",
      en: "Manuals summarizing the environment setup and development procedures",
    },
    descriptions: [
      {
        ja: "自分の研究室のプログラミングをしたことがない人向けに環境構築と開発の手順のマニュアルを作った。",
        en: "I created manuals for environment setup and development procedures for people in my lab who have never done programming before.",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/env-setup" }],
  },
  {
    title: {
      ja: "競プロ用デバッグツール「cpp-dump」",
      en: 'Debugging Tool for Competitive Programming: "cpp-dump"',
    },
    period: "2023",
    category: "Other",
    summary: {
      ja: "C++でどんな型でもプリントできる関数",
      en: "A function that can print almost any type in C++",
    },
    descriptions: [
      {
        ja: "Pythonのprint()、JavaScriptのconsole.log()のように、C++でどんな型でもプリントできる関数。",
        en: "A function in C++ that can print any type, similar to Python's print() or JavaScript's console.log().",
      },
      {
        ja: "競プロをはじめたが、C++にそのような関数がなく、デバッグが不便だった(時間がかかっていた)ので作った。",
        en: "After starting competitive programming, I realized that C++ lacked such a function, which made debugging inconvenient and time-consuming, so I created it.",
      },
      {
        ja: "OSSとして公開し、告知にも力を入れた。",
        en: "I released it as open-source software and put effort into promoting it.",
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
      en: 'Oh My Zsh theme: "simplerich-zsh-theme"',
    },
    period: "2023",
    category: "Other",
    mainTechStacks: ["Shell Script"],
    allTechStacks: ["Oh My Zsh", "Zsh", "Shell Script"],
    summary: {
      ja: "Git Status等が一目でわかるOh My Zshテーマ",
      en: "An Oh My Zsh theme that provides an at-a-glance view of Git status and more",
    },
    descriptions: [
      {
        ja: "Gitの、いくつのファイルがstaged, changed, untrackedかやリモートリポジトリから何コミット前にある、後にある、という情報が一目でわかるOh My Zsh(Zshを見やすくするツール)のテーマ。",
        en: "An Oh My Zsh theme that provides an at-a-glance view of Git information, such as the number of staged, changed, and untracked files, as well as information about how many commits ahead or behind the remote repository is. (Oh My Zsh is a tool for making Zsh more user-friendly.)",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/simplerich-zsh-theme" }],
    imgSrc: "/projects/other/simplerich-zsh-theme.jpg",
  },
  {
    title: { ja: "ポートフォリオ(2023年版)", en: "Portfolio(2023)" },
    period: "2023",
    category: "Web",
    summary: { ja: "2023年に作ったポートフォリオ", en: "A portfolio I made in 2023" },
    descriptions: [
      {
        ja: "2023年に作ったポートフォリオ。(自分で行った)デザインよりもパフォーマンスチューニングしているHistoryのカードをクリックすると動く工夫点を見てほしい。",
        en: "A portfolio I made in 2023.",
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
      en: "A book I read to improve the appearance of my website",
    },
    descriptions: [
      {
        ja: "個人開発の時のWebサイトの見た目を良くしたいと思って読んだ本。",
        en: "A book I read to improve the appearance of the website for my personal projects.",
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
      en: "An app that automatically generates a roster of residents for my student dormitory.",
    },
    descriptions: [
      {
        ja: "自分が住んでいた自治寮で寮生の名簿を作る作業があり、電話番号や住所のフォーマットを整える作業が毎年大変だったので、自動化するプログラムを作った。",
        en: "In the student dormitory I lived in, there was a task of creating a roster of residents, and it was always a hassle to format phone numbers and addresses every year. To make this process easier, I created an automation program.",
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
    title: {
      ja: "LINE Bot「寄宿舎届出サポート」",
      en: 'LINE Bot "Dormitory Notification Support"',
    },
    period: "2023",
    category: "Web",
    summary: {
      ja: "自治寮の届出をサポートするLINE Bot",
      en: "A LINE Bot that supports dormitory notifications.",
    },
    descriptions: [
      {
        ja: "自分が住んでいた自治寮で必要だった各種届出を、LINE BOTで会話を行うだけで出来るようにし、出す側も確認する側も便利になるようにした。",
        en: "I created a LINE BOT that allows residents of the student dormitory I lived in to submit various required notifications through a simple conversation. This makes the process more convenient for both the submitters and the reviewers.",
      },
      {
        ja: "届出内容はGoogle Driveに自動で保存されるようになっている。また、届出内容の一部チェック機能付き。",
        en: "The submitted information is automatically saved to Google Drive, and there is also a feature to check certain parts of the submitted content.",
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
      en: 'Mention Generation Chrome Extension: "M-GEN"',
    },
    period: "2022",
    category: "Web",
    summary: {
      ja: "Google Formsで回答しなかった人のメンション文を生成するChrome拡張",
      en: "A Chrome extension that generates mention messages for people who haven't responded on Google Forms",
    },
    descriptions: [
      {
        ja: "自分が住んでいた自治寮でアンケートに回答しなかった人全員をLINEでメンションする文化があり、手作業で回答していない人を調べてメンションするのは大変なので、自動化するChrome拡張を作った。",
        en: "In the student dormitory I lived in, there was a practice of mentioning all the people who hadn't responded to surveys via LINE. Since manually checking who hadn't responded and mentioning them was tedious, I created a Chrome extension to automate this process.",
      },
      {
        ja: "なお、これを含めこれ以前は生のHTMLとCSS、JavaScriptでアプリを作っていた。",
        en: "",
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
      en: 'WordPress theme for course evaluation site: "selva"',
    },
    period: "2022",
    category: "Web",
    summary: {
      ja: "授業評定サイト用WordPressテーマ",
      en: "WordPress theme for course evaluation site",
    },
    descriptions: [
      {
        ja: "友達と二人で授業の評定サイトを作る。学部2年の時に作ったもので、いつかデザインを改善したいと思っている。自分はホームページ(トップページ)以外を担当。",
        en: "I created a course evaluation site with a friend. It was made when I was in my second year of university, and I plan to improve the design someday. I was responsible for everything except the homepage (the top page).",
      },
      {
        ja: "各大学で使ってもらえるようWordPressテーマとして作り、管理画面でCSVを使って授業データをインポートできるようにしてある。",
        en: "To make it usable at various universities, I developed it as a WordPress theme, and the admin panel allows course data to be imported using CSV files.",
      },
      {
        ja: "なお、技術スタックのPythonはWebスクレイピング用。",
        en: "The Python tech stack was used for web scraping purposes.",
      },
      {
        ja: "※デモサイトのサーバーの契約が切れたので再度準備中。",
        en: "Note: The demo site's server contract has expired, so I am in the process of preparing it again.",
      },
    ],
    mainTechStacks: ["WordPress", "PHP"],
    allTechStacks: ["WordPress", "PHP", "jQuery", "HTML", "CSS", "JavaScript", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/selva/" }],
  },
  {
    title: {
      ja: "リーダブルコード",
      en: "The Art of Readable Code",
    },
    period: "2022",
    category: "Book",
    summary: { ja: "より良いコードを書くために読んだ本", en: "A book I read to write better code" },
    descriptions: [{ ja: "説明不要の名著。", en: "A masterpiece that requires no explanation." }],
    links: [{ label: "Book", href: "https://amzn.asia/d/5Ermg8D" }],
    imgSrc: "/projects/books/readable-code.jpg",
  },
  {
    title: { ja: "水中ドローン", en: "Underwater Drone" },
    period: { ja: "高校", en: "High School" },
    category: "Electronics",
    summary: {
      ja: "文化祭で展示した水中ドローン",
      en: "The underwater drone I exhibited at the cultural festival.",
    },
    descriptions: [
      {
        ja: "高校2年の文化祭で作って展示した。ブラウザ上でモーターの制御とカメラ映像が見れるようになっている。",
        en: "I made and exhibited it at the cultural festival in my second year of high school. It allows motor control and camera footage to be viewed through a web browser.",
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
      en: "An SD card library created through electronics projects.",
    },
    descriptions: [
      {
        ja: "電子工作でICレコーダー用に作ったSDカードライブラリ。PICの少ないリソースでも動くようにメモリとプログラムメモリをなるだけ使わないように書いている。",
        en: "An SD card library created for an IC recorder through electronics projects. It was written to minimize the use of memory and program memory, ensuring it runs efficiently even with the limited resources of a PIC microcontroller.",
      },
    ],
    mainTechStacks: ["C"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/SDCardLibrary/" }],
  },
  {
    title: { ja: "ボート3台目", en: "The Third boat" },
    period: { ja: "中学校", en: "Junior High School" },
    category: "Other",
    summary: { ja: "自分一人で作った3mのボート", en: "A 3-meter boat I built on my own." },
    descriptions: [
      {
        ja: "小5のときから作っていたボートの集大成。今度は自分一人で3mのボートを作った。",
        en: "The culmination of the boat I started building in 5th grade. This time, I built a 3-meter boat entirely on my own.",
      },
      {
        ja: "なお、写真は製作途中のもの。",
        en: "Note: The photo shows the boat during the construction process.",
      },
    ],
    imgSrc: "/projects/other/third-boat-wip.jpg",
  },
  {
    title: { ja: "電気ショックタイマー", en: "Electric Shock Timer" },
    period: { ja: "中学校", en: "Junior High School" },
    category: "Electronics",
    summary: {
      ja: "電子工作で作った電気ショックで時間を知らせるタイマー",
      en: "A timer that tells the time with an electric shock",
    },
    descriptions: [
      {
        ja: [
          "中毒並みに時間を忘れて作業に熱中してしまうことがあり、普通のタイマーでは作業をやめられなかったため、電気ショックで時間を知らせるタイマーを作った。",
          "腕時計型で、肌につく部分に電気を流す端子が付いている。",
        ].join(""),
        en: [
          "There were times when I became so absorbed in my work that I lost track of time, almost like an addiction, and regular timers couldn’t get me to stop. So, I created a timer that notifies me with an electric shock.",
          "It’s a wristwatch design with terminals that deliver a mild electric shock to the part that touches the skin.",
        ].join(""),
      },
      { ja: "なお、写真は現在準備中。", en: "Note: The photo is currently being prepared." },
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
      {
        ja: "10日でおぼえるJava入門教室という本を読み、小6の時に始めてプログラミングで初めて作ったアプリ。",
        en: 'I read the book "10 Days to Learn Java: Introduction Course" and created my first app with programming when I was in 6th grade.',
      },
    ],
    mainTechStacks: ["Java"],
    imgSrc: "/projects/other/self-made-editor.jpg",
  },
  {
    title: { ja: "ボート1台目", en: "The First Boat" },
    period: { ja: "小学校", en: "Elementary School" },
    category: "Other",
    summary: {
      ja: "父と二人で作った人が乗れるボート",
      en: "A boat that can carry people, built with my father.",
    },
    descriptions: [
      {
        ja: "佐々木家が昔造船所だったということで、ボートを作ってみようという話になり、小5のとき父と二人で人が乗れるボートを作った。",
        en: "Since the Sasaki family used to have a shipyard, the idea of building a boat came up. In 5th grade, Ryota and his father built a boat that could carry people.",
      },
    ],
    imgSrc: "/projects/other/first-boat.jpg",
  },
] as const satisfies Multilingual<Omit<Project, "id" | "starCount" | "forkCount">>[];
