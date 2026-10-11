import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { ACCOUNTS } from "~/static-data/accounts";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto px-6 max-sm:px-3 py-8 flex justify-between items-center">
        <div className="text-base font-medium pl-3">© 2024 Ryota Sasaki</div>
        <div className="flex items-center">
          <a
            href={ACCOUNTS.find((account) => account.siteName === "GitHub")?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-square btn-ghost"
          >
            <FaGithub size={24} title="GitHub" />
          </a>
          <a
            href={ACCOUNTS.find((account) => account.siteName === "X")?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-square btn-ghost"
          >
            <FaXTwitter size={24} title="X" />
          </a>
          <a
            href={ACCOUNTS.find((account) => account.siteName === "Linkedin")?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-square btn-ghost"
          >
            <FaLinkedin size={24} title="Linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};
