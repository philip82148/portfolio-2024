import {
  faCode,
  faStar,
  faCalendarDays,
  faMicrochip,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";

export const PersonalProjects: React.FC = () => {
  const periodAndProjects = useMemo(
    () =>
      Array.from(
        projects.reduce((yearToProjects, project) => {
          const period = project.period ?? String(project.year);
          if (!yearToProjects.has(period)) yearToProjects.set(period, []);
          yearToProjects.get(period)?.push(project);
          return yearToProjects;
        }, new Map<string, Project[]>())
      ).map(([period, projects]) => ({ period, projects })),
    []
  );

  const [modalProject, setModalProject] = useState<Project>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showModal = (project: Project) => {
    setModalProject(project);
    dialogRef.current?.showModal();
  };

  const [projectTitleToNumStar, setProjectTitleToNumStar] = useState<Record<string, number>>({});

  useEffect(() => {
    // projects.forEach(async (project) => {
    //   const link = project.links?.find((link) => link.href.startsWith("https://github.com/"))?.href;
    //   if (!link) return;
    //   const { owner, repo } =
    //     link.match(/https:\/\/github.com\/(?<owner>)\/(?<repo>)/)?.groups ?? {};
    //   const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    //   if (!res.ok) return;
    //   const numStar = await res.json();
    //   setProjectTitleToNumStar((prev) => ({ ...prev, [project.title]: numStar }));
    // });
  }, []);

  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Personal Projects</h2>
      {periodAndProjects.map(({ period, projects }) => (
        <Fragment key={period}>
          <h3 className="font-bold text-2xl mt-8 mb-4">{period}</h3>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={project.title}
                className="card card-bordered card-side border-2 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-[ease] h-36"
                onClick={() => showModal(project)}
                onKeyDown={(e) => e.key === "Enter" && showModal(project)}
              >
                <div className="card-body p-6 w-full justify-between">
                  <h4 className="card-title">{project.title}</h4>
                  <div className="text-sm text-slate-500">{project.shortDescription}</div>
                  <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
                    {projectTitleToNumStar[project.title] && (
                      <span>
                        <FontAwesomeIcon icon={faStar} className="mr-2" />
                        {projectTitleToNumStar[project.title]}
                      </span>
                    )}
                    {project.techStacks && (
                      <span>
                        <FontAwesomeIcon icon={faCode} className="mr-2.5" />
                        {project.techStacks.join(" / ")}
                      </span>
                    )}
                    <span>
                      <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                      {project.year}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                      {project.genre}
                    </span>
                  </div>
                </div>
                {project.imgSrc && (
                  <figure className="max-w-[230px]">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="object-cover min-h-full"
                    />
                  </figure>
                )}
              </div>
            ))}
            <div className="gradient-blur -ml-20 w-20" />
          </div>
        </Fragment>
      ))}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box w-11/12 max-w-7xl px-12 py-10">
          <div className="flex justify-between items-end">
            <h3 className="font-bold text-2xl">{modalProject?.title}</h3>
            <form method="dialog">
              <button className="btn btn-square btn-sm">
                <FontAwesomeIcon icon={faX} />
              </button>
            </form>
          </div>
          <div className="flex gap-5 my-5">
            <span>
              <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
              {modalProject?.year}
            </span>
            <span>
              <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
              {modalProject?.genre}
            </span>
          </div>
          <div className="flex gap-10">
            <div className="grid grid-cols-[auto_1fr] gap-x-10 h-min gap-y-2">
              <span className="font-bold">Short Description</span>
              {modalProject?.shortDescription}
              <span className="font-bold">Description</span>
              <p>{modalProject?.description}</p>
              {modalProject?.techStacks && (
                <>
                  <span className="font-bold">Tech Stacks</span>
                  <span>{modalProject?.techStacks?.join(" / ")}</span>
                </>
              )}
              {modalProject?.links?.map(({ label, href }) => (
                <Fragment key={label}>
                  <span className="font-bold">{label}</span>
                  <a href={href} target="_blank" rel="noreferrer" className="link">
                    {href}
                  </a>
                </Fragment>
              ))}
            </div>
            {modalProject?.imgSrc && (
              <figure className="max-w-[50%]">
                <img src={modalProject?.imgSrc} alt={modalProject?.title} />
              </figure>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};

type Project = {
  title: string;
  year: number;
  period?: string;
  genre: "Web" | "Book" | "Electronics" | "Other";
  shortDescription: string;
  description?: string;
  techStacks?: string[];
  links?: { label: string; href: string }[];
  imgSrc?: string;
};

const projects: Project[] = [
  {
    title: "ポートフォリオ(2024年版)",
    year: 2024,
    genre: "Web",
    shortDescription: "このポートフォリオ",
    techStacks: ["Remix", "TypeScript"],
    links: [
      { label: "GitHub", href: "https://github.com/philip82148/portfolio-2024/" },
      { label: "Demo", href: "https://philip82148.github.io/portfolio-2024/" },
    ],
  },
  {
    title: "環境構築と開発の手順",
    year: 2023,
    genre: "Other",
    shortDescription: "環境構築と開発の手順をまとめたマニュアル",
    description:
      "自分の研究室のプログラミングをしたことがない人向けに環境構築と開発の手順のマニュアルを作った。",
    links: [{ label: "GitHub", href: "https://github.com/philip82148/env-setup" }],
  },
  {
    title: "競プロ用デバッグツール「cpp-dump」",
    year: 2023,
    genre: "Other",
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
    genre: "Other",
    techStacks: ["shell"],
    shortDescription: "Git Status等が一目でわかるOh My Zshテーマ",
    description:
      "Oh My Zshのテーマを作った。Gitの、いくつのファイルがstaged, changed, untrackedかやリモートリポジトリから何コミット前にある、後にある、という情報が一目でわかるテーマ。",
    links: [{ label: "GitHub", href: "https://github.com/philip82148/simplerich-zsh-theme/" }],
  },
  {
    title: "ポートフォリオ(2023年版)",
    year: 2023,
    genre: "Web",
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
    genre: "Web",
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
    genre: "Web",
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
    genre: "Web",
    shortDescription:
      "Google Formsで回答しなかった人全員をメンションするメッセージ文を生成するChrome拡張",
    techStacks: ["jQuery", "JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/philip82148/mention-generator/" }],
  },
  {
    title: "授業評定サイト用WordPressテーマ「selva」",
    year: 2022,
    genre: "Web",
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
    genre: "Electronics",
    shortDescription: "電子工作で作った水中ドローン",
    description:
      "高校2年の文化祭で作って展示した。ブラウザ上でモーターの制御とカメラ映像が見れる。なお、水中ドローンという名目だが、水中で電波が届かないので実際には水上ドローンである。",
    techStacks: ["C", "HTML", "CSS", "JavaScript", "Python"],
  },
  {
    title: "SDカードライブラリ",
    year: 2015,
    period: "中学校",
    genre: "Electronics",
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
    genre: "Other",
    shortDescription: "自分一人で作った3mのボート",
    description: "自分一人で3mのボートを作った。",
  },
  {
    title: "電気ショックタイマー",
    year: 2014,
    period: "中学校",
    genre: "Electronics",
    shortDescription: "電子工作で作った電気ショックで時間を知らせるタイマー",
    description:
      "中毒並みに時間を忘れて作業に熱中してしまうことがあり、普通のタイマーでは作業をやめられなかったため、電気ショックで時間を知らせるタイマーを作った。",
    techStacks: ["PICアセンブラ"],
  },
  {
    title: "メモ帳",
    year: 2013,
    period: "小学校",
    genre: "Other",
    shortDescription: "プログラミングで初めて作ったアプリであるメモ帳",
    description: "プログラミングで初めて作ったアプリ",
    techStacks: ["Java"],
  },
  {
    title: "ボート1台目",
    year: 2011,
    period: "小学校",
    genre: "Other",
    shortDescription: "父と二人で作った人が乗れるボート",
    description: "父と二人で人が乗れるボートを作った。",
  },
];
