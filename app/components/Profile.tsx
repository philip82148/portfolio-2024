import type React from "react";

export const Profile: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-center gap-32 pt-32 pb-28">
        <div className="avatar">
          <div className="size-80 rounded-full">
            <img src="me.jpg" alt="Ryota Sasaki" />
          </div>
        </div>
        <div className="w-2/5">
          <div className="flex items-center gap-8">
            <h1 className="font-bold text-5xl">Ryota Sasaki</h1>
            {/* <a className="font-normal text-xl" href="https://github.com/philip82148">
            (@philip82148)
          </a> */}
          </div>
          <h2 className="font-bold text-xl mt-5 mb-2.5">A bit about me</h2>
          <p>
            小6から独学でJavaと回路設計を学び、メカ開発にあこがれ趣味として電⼦⼯作を始める。中1時点でSDカード操作ライブラリを作ったり、高校では水中ドローンを作ったりする。
            ⼤学に⼊ってからはインターンや個⼈開発でWeb系を触り、最近では競プロ用に作ったC++のデバッグツールが獲得GitHubスター数300を超えた。
          </p>
          {/* <h2 className="font-bold text-xl mt-6">Accounts</h2>
          <div className="flex h-10 items-center gap-2">
            <AccountLink
              siteName="GitHub"
              icon="accounts/github.svg"
              id="@philip82148"
              href="https://github.com/philip82148"
            />
            <AccountLink
              siteName="Zenn"
              icon="accounts/zenn.svg"
              id="@sassan"
              href="https://zenn.dev/sassan"
            />
            <AccountLink
              siteName="AtCoder"
              icon="accounts/atcoder.png"
              id="@philip82148"
              href="https://atcoder.jp/users/philip82148"
              iconSize="h-10"
            />
            <AccountLink
              siteName="Wantedly"
              icon="accounts/wantedly.svg"
              id="@ryouta_sasaki_ag"
              href="https://www.wantedly.com/id/ryouta_sasaki_ag"
              iconSize="h-10"
            />
            <AccountLink
              siteName="X"
              icon="accounts/x.png"
              id="@philip82148"
              href="https://x.com/philip82148"
              iconSize="h-7"
            />
            <AccountLink
              siteName="DEV"
              icon="accounts/dev.svg"
              id="@philip82148"
              href="https://dev.to/philip82148"
            />
            <AccountLink
              siteName="Qiita"
              icon="accounts/qiita.png"
              id="@philip82148"
              href="https://qiita.com/philip82148"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

// const AccountLink: React.FC<{
//   siteName: string;
//   icon: string;
//   id: string;
//   href: string;
//   iconSize?: string;
// }> = ({ siteName, icon, id, href, iconSize = "h-6" }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="size-8 flex items-center justify-center"
//     >
//       <img src={icon} alt={siteName} className={iconSize} />
//     </a>
//   );
// };