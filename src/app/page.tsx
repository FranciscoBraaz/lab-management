"use client";

import ListHeader from "@/features/routines/components/list-header";
import RoutineList from "@/features/routines/components/routine-list";
import SearchBar from "@/features/routines/components/search-bar";
import useSearch from "@/features/routines/hooks/useSearch";
import { Button } from "@/shared/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const { keyword, setKeyword, debouncedKeyword } = useSearch();

  return (
    <div>
      <QueryClientProvider client={new QueryClient()}>
        <ListHeader />
        <section className=" mt-[47px] flex items-center gap-[9px] flex-col sm:flex-row">
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
          <div className="flex gap-[9px]">
            <Button className="bg-btn-primary cursor-pointer h-[24px] rounded-[6px]">
              Buscar
            </Button>
            <Button className="bg-[#0A2540] cursor-pointer h-[24px] rounded-[6px]">
              Filtragem Avancada
            </Button>
          </div>
        </section>
        <div className=" w-full h-[1px] bg-[#E4E4E4] mt-[8px]" />
        <section className="mb-[16px]">
          <RoutineList debouncedKeyword={debouncedKeyword} />
        </section>
      </QueryClientProvider>
    </div>
  );
}
