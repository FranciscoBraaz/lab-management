"use client";

import React from "react";
import RoutineModal from "./routine-modal";

function ListHeader() {
  return (
    <section className="flex items-center justify-between m-auto max-w-[864px] flex-col sm:flex-row gap-[8px]">
      <h1 className="text-[28px] font-semibold text-text-primary text-center line-heading-[32px]">
        Gestão de rotinas de laboratório
      </h1>
      <RoutineModal />
    </section>
  );
}

export default ListHeader;
