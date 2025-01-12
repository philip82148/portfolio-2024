import type { Account } from "~/api/interface";
import { SITE_ICONS } from "~/frontend-static-data";

export const Accounts: React.FC<{ accounts: Account[] }> = ({ accounts }) => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Accounts</h2>
      <ul className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
        {accounts.map((account) => (
          <li key={account.id}>
            <a
              href={account.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost size-full justify-start gap-4"
            >
              <div className="w-10 flex items-center justify-center">
                {SITE_ICONS[account.siteIconKey]}
              </div>
              <div className="flex flex-col text-sm items-start font-semibold">
                <span>{account.siteName}</span>
                <span>{account.accountId}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
