import type { OmitId } from "./OmitId";

import type { Account } from "~/content-loader/interface";

export const ACCOUNTS = [
  {
    siteName: "GitHub",
    siteIconKey: "github",
    accountId: "@sassan-dev",
    href: "https://github.com/sassan-dev",
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
    accountId: "@ryota_sasaki_01",
    href: "https://www.wantedly.com/id/ryota_sasaki_01",
  },
  {
    siteName: "X",
    siteIconKey: "x",
    accountId: "@sassan_dev",
    href: "https://x.com/sassan_dev",
  },
  {
    siteName: "DEV",
    siteIconKey: "dev",
    accountId: "@sassan-dev",
    href: "https://dev.to/sassan-dev",
  },
  {
    siteName: "Qiita",
    siteIconKey: "qiita",
    accountId: "@sassan-dev",
    href: "https://qiita.com/sassan-dev",
  },
  {
    siteName: "Linkedin",
    siteIconKey: "linkedin",
    accountId: "@ryotasasaki",
    href: "https://www.linkedin.com/in/ryotasasaki",
  },
] as const satisfies OmitId<Account>[];
