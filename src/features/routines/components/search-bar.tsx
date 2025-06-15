"use client";

import { Search } from "lucide-react";
import { Input } from "@/shared/components/ui/input";

export default function SearchBar({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-[14px] w-[14px]" />
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        className="pl-10 pr-4 py-2 text-sm h-[24px] rounded-[6px] text-[14px]"
      />
    </div>
  );
}
