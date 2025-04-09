import type { Stat } from "~/api/interface";

export const Stats: React.FC<{ stats: Stat[] }> = ({ stats }) => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-8">Stats</h3>
      <div className="flex flex-wrap items-start gap-4 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
};

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
  return (
    <a key={stat.id} href={stat.providerHref} target="_blank" rel="noopener noreferrer">
      <img
        src={stat.imgSrc}
        alt={`${stat.name} Stats`}
        className="h-40 w-auto"
        width="400"
        height="160"
      />
    </a>
  );
};
