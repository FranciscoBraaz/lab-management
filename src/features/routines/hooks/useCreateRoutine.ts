import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RoutineFormData } from "../types/routine";
import { toast } from "sonner";
import { createRoutine } from "../services/routines.services";

function useCreateRoutine({
  reset,
  closeModal,
}: {
  reset: ({}) => void;
  closeModal: () => void;
}) {
  const queryClient = useQueryClient();

  const onSubmit = useMutation({
    mutationFn: async (values: RoutineFormData) => {
      const formattedRotine = {
        title: values.title,
        procedure: {
          solution: values.solution,
          compound: values.compound,
          reagent: values.reagent,
          observation: values.observation,
          catalyst: values.catalyst,
          observationGeneral: values.observationGeneral,
        },
        substances: [
          values.substance1,
          values.substance2,
          values.substance3,
          values.substance4,
        ],
      };

      await createRoutine(formattedRotine);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["routines"] });
      reset({});
      closeModal();
      toast.success("Rotina criada com sucesso!");
    },
    onError: (error) => {
      console.error("Error creating routine:", error);
      toast.error("Erro ao criar rotina!");
    },
  });

  return {
    onSubmit,
  };
}

export default useCreateRoutine;
