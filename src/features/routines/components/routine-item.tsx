"use client";

import { Routine } from "../types/routine";

function RoutineItem({ index, routine }: { index: number; routine: Routine }) {
  const bg = index % 2 === 0 ? "#fff" : "#f5f6f8";
  const procedure = routine.procedure;

  return (
    <article className="p-[13px] rounded-[9px]" style={{ backgroundColor: bg }}>
      <p className="font-semibold text-[14px] text-text-primary">
        {new Date(routine.createdAt).toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Sao_Paulo",
        })}{" "}
        - {routine.title}
      </p>
      <section className="flex justify-between">
        <ul className="pl-[12px] flex flex-col gap-[8px]">
          <li className="text-[14px] text-text-primary">
            {procedure.solution}
          </li>
          <li className="text-[14px] text-text-primary">
            {procedure.compound}
          </li>
          <li className="text-[14px] text-text-primary">{procedure.reagent}</li>
          <li className="text-[14px] text-text-primary">
            {procedure.observation}
            <ul>
              <li className="text-[14px] text-text-primary pl-[16px]">
                {procedure.catalyst}
              </li>
            </ul>
          </li>
          <li className="text-[12px] text-[#898383]">
            {procedure.observationGeneral}
          </li>
        </ul>
        <ul className="flex flex-col gap-[26px]">
          {routine.substances.map((substance, index) => {
            const lastItem = index === routine.substances.length - 1;

            return (
              <li
                key={index}
                className="text-[14px] text-text-primary font-medium"
                style={{ color: lastItem ? "#675DFF" : "#414552" }}
              >
                {substance}
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}

export default RoutineItem;
