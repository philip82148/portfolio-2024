import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";

export const Header: React.FC = () => {
  return (
    <header className="navbar bg-inherit sticky top-0 z-50 shadow-sm">
      <div className="flex-1">
        <div className="btn btn-ghost text-xl">Ryota Sasaki</div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                <FontAwesomeIcon icon={faLanguage} size="2x" />
              </summary>
              <ul className="bg-inherit rounded-t-none p-2">
                <li>
                  <Link to="/ja">日本語</Link>
                </li>
                <li>
                  <Link to="/en">English</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
};
