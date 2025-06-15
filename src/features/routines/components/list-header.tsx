"use client";

import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

function ListHeader() {
  return (
    <section className="flex items-center justify-between m-auto max-w-[864px] flex-col sm:flex-row gap-[8px]">
      <h1 className="text-[28px] font-semibold text-text-primary text-center line-heading-[32px]">
        Gestão de rotinas de laboratório
      </h1>
      <Button className="bg-btn-primary cursor-pointer">
        <Plus className="w-[20px] h-[20px]" color="#fff" />
        <span>Adicionar rotina</span>
      </Button>
    </section>
  );
}

export default ListHeader;
