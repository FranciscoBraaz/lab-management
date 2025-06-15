import { useState } from "react";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

// Types
import { RoutineFormData } from "../types/routine";

// Custom hooks
import useCreateRoutine from "../hooks/useCreateRoutine";

// Components
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { ScrollArea } from "@/shared/components/ui/scroll-area";

function RoutineModal() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RoutineFormData>();
  const { onSubmit } = useCreateRoutine({
    reset,
    closeModal: () => setOpen(false),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-btn-primary cursor-pointer">
          <Plus className="w-[20px] h-[20px]" color="#fff" />
          <span>Adicionar rotina</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar item</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[600px] pr-[16px]">
          <form
            onSubmit={handleSubmit((values) => onSubmit.mutate(values))}
            className="space-y-4 pl-[8px] pr-[8px]"
          >
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                {...register("title", { required: "Título obrigatório" })}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution">Solução</Label>
              <Input
                id="solution"
                {...register("solution", { required: "Solução é obrigatória" })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="compound">Composto</Label>
              <Input
                id="compound"
                {...register("compound", {
                  required: "Composto é obrigatória",
                })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reagent">Reagente</Label>
              <Input
                id="reagent"
                {...register("reagent", { required: "Reagente é obrigatório" })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="observation">Observação</Label>
              <Textarea
                id="observation"
                {...register("observation", {
                  required: "Observação é obrigatória",
                })}
                className="resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="catalyst">Catalisador</Label>
              <Input
                id="catalyst"
                {...register("catalyst", {
                  required: "Catalisador é obrigatório",
                })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="observationGeneral">Observação Geral</Label>
              <Textarea
                id="observationGeneral"
                {...register("observationGeneral", {
                  required: "Observação Geral é obrigatória",
                })}
                className="resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="substance1">Substância 1</Label>
                <Input
                  id="substance1"
                  {...register("substance1", {
                    required: "Substância 1 é obrigatória",
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="substance2">Substância 2</Label>
                <Input
                  id="substance2"
                  {...register("substance2", {
                    required: "Substância 2 é obrigatória",
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="substance3">Substância 3</Label>
                <Input
                  id="substance3"
                  {...register("substance3", {
                    required: "Substância 3 é obrigatória",
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="substance4">Substância 4</Label>
                <Input
                  id="substance4"
                  {...register("substance4", {
                    required: "Substância 4 é obrigatória",
                  })}
                />
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button type="submit" disabled={onSubmit.isPending} className="cursor-pointer">
                {onSubmit.isPending ? "Adicionando..." : "Adicionar"}
              </Button>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default RoutineModal;
