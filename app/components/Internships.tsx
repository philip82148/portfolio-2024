import { Fragment } from "react";

export const Internships: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Internships</h2>
      <div className="grid grid-cols-[auto_auto_1fr] items-center gap-x-8 pl-2">
        {internships.map(({ name, occupation, start, end, descriptions }, i) => (
          <Fragment key={name}>
            <div className="col-start-1 size-16 rounded-full bg-primary-content mask [mask-image:url(/portfolio-2024/ornaments/company.png)] [mask-size:3rem]" />
            <div className="col-start-2 flex flex-col text-sm font-bold">
              <span>{end}</span>
              <span className="text-xs">―</span>
              <span>{start}</span>
            </div>
            <div className="col-start-3 flex flex-col">
              <h3 className="font-bold text-xl">{name}</h3>
              <div className="font-semibold">{occupation}</div>
            </div>
            <div className="col-start-1 flex justify-center h-full py-4">
              {i !== internships.length - 1 && <div className="w-1 min-h-10 bg-primary-content" />}
            </div>
            <ul className="col-start-3 my-4 pb-10 list-disc list-inside">
              {descriptions.map((description, i) => (
                <li key={i}>{description}</li>
              ))}
            </ul>
          </Fragment>
        ))}
        {/* <div className="col-start-1 flex flex-col items-center h-full">
          <div className="rounded-full size-6 bg-primary-content" />
        </div> */}
      </div>
    </div>
  );
};

const internships: {
  name: string;
  occupation: string;
  start: string;
  end: string;
  descriptions: string[];
}[] = [
  {
    name: "Sky株式会社",
    occupation: "フロントエンド兼バックエンドエンジニア",
    start: "2024/06",
    end: "Present",
    descriptions: ["詳細は守秘義務により割愛。"],
  },
  {
    name: "アイザック株式会社",
    occupation: "フロントエンド兼バックエンドエンジニア",
    start: "2023/02",
    end: "2023/04",
    descriptions: [
      "あるウェブサービスを作る部署にてフロントエンド兼バックエンドエンジニアとして従事。",
      "技術スタックはフロントNext.js、バックNestJS、Hasura、Prismaで、TypeScriptのモノレポ構成。設計手法はDDD。",
    ],
  },
  {
    name: "株式会社飛竜企画",
    occupation: "ソフトウェアエンジニア",
    start: "2022/02",
    end: "2023/02",
    descriptions: [
      "上司から依頼を受け、いくつかの自動化プログラムを作った。",
      "上司とコミュニケーションを取り、要件やソリューションを決定した。",
      "設計から開発まで一人で行った。",
    ],
  },
];
