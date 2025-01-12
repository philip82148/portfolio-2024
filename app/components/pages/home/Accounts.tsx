import type { Account } from "~/api/interface";
import { SITE_ICONS } from "~/frontend-static-data";

export const Accounts: React.FC<{ accounts: Account[] }> = ({ accounts }) => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Accounts</h2>
      <ul className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
        {accounts.map(({ siteName, siteIconKey, id, href }, i) => (
          <li key={i}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost size-full justify-start gap-4"
            >
              <div className="w-10 flex items-center justify-center">{SITE_ICONS[siteIconKey]}</div>
              <div className="flex flex-col text-sm items-start font-semibold">
                <span>{siteName}</span>
                <span>{id}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
