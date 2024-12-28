import clsx from "clsx";

export const Education: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-2">Education</h2>
      {schools.map(({ name, start, end, description }, i) => (
        <div key={name} className="flex items-center gap-8">
          <div className="ml-2 flex flex-col items-center">
            <div className={clsx("h-8 w-1", i !== 0 && "bg-primary-content")} />
            <div className="rounded-full bg-primary-content">
              <div className="size-16 bg-white [mask-image:url(ornaments/school.png)] [mask-size:30px] [mask-position:center] [mask-repeat:no-repeat]" />
            </div>
            <div className={clsx("h-8 w-1", i !== schools.length - 1 && "bg-primary-content")} />
          </div>
          <div className="text-xs">
            <div className="text-sm">{end}</div>
            <div>―</div>
            <div className="text-sm">{start}</div>
          </div>
          <div>
            <div className="font-bold text-xl">{name}</div>
            <div className="text-base">{description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const schools: {
  name: string;
  start: string;
  end: string;
  description?: string;
}[] = [
  {
    name: "東京大学大学院",
    start: "2024/04",
    end: "2026/03",
    description: "工学系研究科 電気系工学専攻",
  },
  {
    name: "慶應義塾大学",
    start: "2024/03",
    end: "2020/04",
    description: "理工学部 電気情報工学科",
  },
  {
    name: "福岡県立修猷館高等学校",
    start: "2017/03",
    end: "2020/04",
    description: "普通科",
  },
];
