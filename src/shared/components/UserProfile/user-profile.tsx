import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import React from "react";

function UserProfile() {
  return (
    <div className="flex gap-2 items-center p-[21px_18px_54px_18px]">
      <Avatar className="w-[20px] h-[20px] rounded-full">
        <AvatarImage
          src="https://github.com/shadcn.png"
          width={20}
          height={20}
        />
        <AvatarFallback>FB</AvatarFallback>
      </Avatar>
      <span className="text-[14px] font-semibold text-[#414552]">Francisco Braz</span>
    </div>
  );
}

export default UserProfile;
