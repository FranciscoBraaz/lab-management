"use client";

import useGetRoutines from "../hooks/useGetRoutines";
import RoutineItem from "./routine-item";

function RoutineList({ debouncedKeyword }: { debouncedKeyword: string }) {
  const { data = [], isLoading } = useGetRoutines({ debouncedKeyword });

  if (isLoading) {
    return <div>Loading...</div>;
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
