import type React from "react";

import type { Profile as IProfile } from "~/api/interface";

export const Profile: React.FC<{ profile: IProfile }> = ({ profile }) => {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-center gap-32 pt-32 pb-28 max-lg:flex-col max-lg:gap-20 max-lg:pt-20 max-lg:pb-0">
        <div className="avatar">
          <div className="size-80 max-md:size-60 rounded-full">
            <img src="/me.jpg" alt="Ryota Sasaki" width="320" height="320" />
          </div>
        </div>
        <div className="w-2/5 max-lg:w-full">
          <div className="flex items-center gap-8">
            <h1 className="font-bold text-5xl max-md:text-4xl">Ryota Sasaki</h1>
          </div>
          <h2 className="font-bold text-xl mt-5 mb-2.5">A bit about me</h2>
          <p>{profile.aBitAboutMe}</p>
        </div>
      </div>
    </div>
  );
};
