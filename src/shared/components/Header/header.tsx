'use client'

import React from "react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

// Custom hooks
import { useIsMobile } from "@/shared/hooks/use-mobile";

// Assets
import Image from "next/image";

function Header() {
  const isMobile = useIsMobile();
  return (
    <header className="w-full pt-[28px] pb-[28px]">
      <div className="flex items-center justify-between m-auto max-w-[864px] flex-col xs:flex-row">
        <div className="flex items-center gap-[8px]">
          {isMobile && <SidebarTrigger className="absolute left-[4px]" />}
          <p className="text-[14px] font-semibold text-text-primary ml-[16px] lg:ml-0">
            Cadastros
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[20px] font-semibold text-btn-primary">Alamo</p>
          <div className="flex items-center gap-[8px]">
            <Button className="bg-btn-primary px-[8px] py-[4px] h-[24px] text-[14px] radius-[4px] rounded-[5px] flex align-items-center cursor-pointer mx-[14px]">
              <Image src="tasks.svg" alt="Inbox" width={16} height={16} />
              <span className="mb-[1px]">Tarefas</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="cursor-pointer relative w-fit h-fit"
            >
              <Image src="inbox.svg" alt="Inbox" width={16} height={16} />
              <span
                className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full bg-green-500 border-white"
                style={{ translate: "25% 25%" }}
                aria-label="New notification"
              />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="cursor-pointer w-fit h-fit"
            >
              <Image src="info.svg" alt="Inbox" width={16} height={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="cursor-pointer w-fit h-fit"
            >
              <Image src="settings.svg" alt="Inbox" width={16} height={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
