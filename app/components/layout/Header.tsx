import { Link } from "@remix-run/react";
import { IoIosArrowDown } from "react-icons/io";
import { TbLanguageHiragana } from "react-icons/tb";

export const Header: React.FC = () => {
  return (
    <header className="navbar bg-inherit sticky top-0 z-50 shadow-sm">
      <div className="flex-1">
        <div className="flex items-center text-xl h-12 px-4 font-semibold">Ryota Sasaki</div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <TbLanguageHiragana size={18} title="Change Language" />
            <IoIosArrowDown size={8} />
          </div>
          <ul className="dropdown-content menu gap-0.5 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <Link to="/ja" preventScrollReset viewTransition>
                日本語
              </Link>
            </li>
            <li>
              <Link to="/en" preventScrollReset viewTransition>
                English
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
