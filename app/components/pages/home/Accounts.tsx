import clsx from "clsx";

import type { Account } from "~/api/interface";
import { SITE_ICONS } from "~/frontend-static-data";

export const Accounts: React.FC<{ accounts: Account[] }> = ({ accounts }) => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Accounts</h2>
      <ul className="grid grid-cols-4 gap-5">
        {accounts.map(({ siteName, siteIconKey, id, href, colorAdjust }) => (
          <li key={siteName}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx("btn btn-ghost size-full justify-start gap-4", colorAdjust)}
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
