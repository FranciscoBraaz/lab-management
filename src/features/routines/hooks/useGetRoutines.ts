import { useQuery } from "@tanstack/react-query";
import { fetchRoutines } from "../services/routines.services";
import { Routine } from "../types/routine";

function useGetRoutines({ debouncedKeyword }: { debouncedKeyword: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["routines", debouncedKeyword],
    queryFn: async () => await getRoutines(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: true,
    retry: false,
  });

  async function getRoutines() {
    try {
      const data = (await fetchRoutines(debouncedKeyword)) as Routine[];
      return data;
    } catch (error) {
      console.error("Error fetching routines:", error);
      return [];
    }
  }

  return { data, isLoading };
}

export default useGetRoutines;
