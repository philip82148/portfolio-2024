import type { Account } from "~/api/interface";

export const ACCOUNTS: Omit<Account, "id">[] = [
  {
    siteName: "GitHub",
    siteIconKey: "github",
    accountId: "@philip82148",
    href: "https://github.com/philip82148",
  },
  {
    siteName: "Zenn",
    siteIconKey: "zenn",
    accountId: "@sassan",
    href: "https://zenn.dev/sassan",
  },
  {
    siteName: "AtCoder",
    siteIconKey: "atcoder",
    accountId: "@philip82148",
    href: "https://atcoder.jp/users/philip82148",
  },
  {
    siteName: "Wantedly",
    siteIconKey: "wantedly",
    accountId: "@ryouta_sasaki_ag",
    href: "https://www.wantedly.com/id/ryouta_sasaki_ag",
  },
  {
    siteName: "X",
    siteIconKey: "x",
    accountId: "@philip82148",
    href: "https://x.com/philip82148",
  },
  {
    siteName: "DEV",
    siteIconKey: "dev",
    accountId: "@philip82148",
    href: "https://dev.to/philip82148",
  },
  {
    siteName: "Qiita",
    siteIconKey: "qiita",
    accountId: "@philip82148",
    href: "https://qiita.com/philip82148",
  },
  {
    siteName: "Linkedin",
    siteIconKey: "linkedin",
    accountId: "@ryota-sasaki-philip82148",
    href: "https://www.linkedin.com/in/ryota-sasaki-philip82148",
  },
];
