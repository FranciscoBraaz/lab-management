"use client";

import useGetRoutines from "../hooks/useGetRoutines";
import RoutineItem from "./routine-item";
import RoutineItemSkeleton from "./routine-item-skeleton";

const skeletonList = [1, 2, 3, 4];

function RoutineList({ debouncedKeyword }: { debouncedKeyword: string }) {
  const { data = [], isLoading } = useGetRoutines({ debouncedKeyword });

  if (isLoading) {
    return (
      <ul className="flex flex-col gap-2 mt-[8px]">
        {skeletonList.map((_, index) => (
          <li key={index}>
            <RoutineItemSkeleton />
          </li>
        ))}
      </ul>
    );
  }

  if (!Array.isArray(data)) {
    return <p>Nenhuma rotina encontrada</p>;
  }

  return (
    <ul>
      {data?.map((routine, index) => (
        <li key={routine.id}>
          <RoutineItem routine={routine} index={index} />
        </li>
      ))}
    </ul>
  );
}

export default RoutineList;
