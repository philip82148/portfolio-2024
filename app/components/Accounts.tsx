import clsx from "clsx";

export const Accounts: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-3xl mb-8">Accounts</h2>
      <ul className="grid grid-cols-4 gap-5">
        {accounts.map(({ siteName, id, href, iconSrc, colorAdjust, iconSizeAdjust }) => (
          <li key={siteName}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx("btn btn-ghost size-full justify-start gap-4", colorAdjust)}
            >
              <div className="w-10 flex items-center justify-center">
                <img src={iconSrc} alt={siteName} className={iconSizeAdjust} />
              </div>
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

const accounts: {
  siteName: string;
  id: string;
  href: string;
  iconSrc: string;
  colorAdjust?: string;
  iconSizeAdjust?: string;
}[] = [
  {
    siteName: "GitHub",
    id: "@philip82148",
    href: "https://github.com/philip82148",
    iconSrc: "accounts/github.svg",
    iconSizeAdjust: "w-8",
  },
  {
    siteName: "Zenn",
    id: "@sassan",
    href: "https://zenn.dev/sassan",
    iconSrc: "accounts/zenn.svg",
    colorAdjust: "hover:[background-color:#3EA8FF44]",
    iconSizeAdjust: "w-8",
  },
  {
    siteName: "AtCoder",
    id: "@philip82148",
    href: "https://atcoder.jp/users/philip82148",
    iconSrc: "accounts/atcoder.png",
  },
  {
    siteName: "Wantedly",
    id: "@ryouta_sasaki_ag",
    href: "https://www.wantedly.com/id/ryouta_sasaki_ag",
    iconSrc: "accounts/wantedly.svg",
  },
  {
    siteName: "X",
    id: "@philip82148",
    href: "https://x.com/philip82148",
    iconSrc: "accounts/x.png",
    iconSizeAdjust: "w-6",
  },
  {
    siteName: "DEV",
    id: "@philip82148",
    href: "https://dev.to/philip82148",
    iconSrc: "accounts/dev.svg",
    iconSizeAdjust: "w-8",
  },
  {
    siteName: "Qiita",
    id: "@philip82148",
    href: "https://qiita.com/philip82148",
    iconSrc: "accounts/qiita.png",
    colorAdjust: "hover:[background-color:#55C50044]",
    iconSizeAdjust: "w-8",
  },
  {
    siteName: "Linkedin",
    id: "@ryota-sasaki-philip82148",
    href: "https://www.linkedin.com/in/ryota-sasaki-philip82148",
    iconSrc: "accounts/linkedin.png",
    colorAdjust: "hover:[background-color:#0077B533]",
    iconSizeAdjust: "w-8",
  },
];
