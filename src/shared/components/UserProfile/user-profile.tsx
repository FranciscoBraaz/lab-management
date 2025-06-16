"use client";

import { useIsMobile } from "@/shared/hooks/use-mobile";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

function UserProfile() {
  const isMobile = useIsMobile();
  const { toggleSidebar } = useSidebar();

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
      <span className="text-[14px] font-semibold text-[#414552]">
        Francisco Braz
      </span>
      {isMobile && (
        <Button
          size="icon"
          variant="ghost"
          className="p-0 flex items-center h-fit ml-auto"
          onClick={toggleSidebar}
        >
          <X />
        </Button>
      )}
    </div>
  );
}

export default UserProfile;
