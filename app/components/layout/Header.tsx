import { Link } from "@remix-run/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbLanguageHiragana } from "react-icons/tb";

export const Header: React.FC = () => {
  return (
    <header className="navbar bg-inherit sticky top-0 z-50 shadow-sm">
      <div className="flex-1">
        <div className="btn btn-ghost text-xl">Ryota Sasaki</div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <TbLanguageHiragana size="1.4rem" />
            <RiArrowDropDownLine size="1.4rem" />
          </div>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <Link to="/ja" preventScrollReset>
                日本語
              </Link>
            </li>
            <li>
              <Link to="/en" preventScrollReset>
                English
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
