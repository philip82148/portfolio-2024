import { Link } from "@remix-run/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

import { useLang, type Language } from "~/multilingual";

export const Header: React.FC = () => {
  const serverLang = useLang();
  // It takes time for serverLang to change, so use a separate state for the buttons.
  const [activeButtonLang, setActiveButtonLang] = useState<Language | undefined>(serverLang);

  useEffect(() => {
    setActiveButtonLang(serverLang);
  }, [serverLang]);

  return (
    <header className="navbar bg-inherit sticky top-0 z-50 shadow-sm">
      <div className="flex-1">
        <Link to={`/${serverLang}`} className="btn btn-ghost text-xl">
          Ryota Sasaki
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end" title="Change language">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <TbWorld size={16} className="mt-0.5 -mr-0.5" />
            <span>Language</span>
            <IoIosArrowDown size={10} />
          </div>
          <ul className="dropdown-content menu gap-1 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <Link
                to="/ja"
                preventScrollReset
                viewTransition
                className={clsx(activeButtonLang === "ja" && "active")}
                onClick={() => setActiveButtonLang("ja")}
              >
                日本語
              </Link>
            </li>
            <li>
              <Link
                to="/en"
                preventScrollReset
                viewTransition
                className={clsx(activeButtonLang === "en" && "active")}
                onClick={() => setActiveButtonLang("en")}
              >
                English
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
