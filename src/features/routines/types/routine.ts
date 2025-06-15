type Procedure = {
  solution: string;
  compound: string;
  reagent: string;
  observation: string;
  catalyst: string;
  observationGeneral: string;
};

export interface Routine {
  id: string;
  title: string;
  procedure: Procedure;
  substances: string[];
  createdAt: string;
}

export type RoutineFormData = {
  title: string;
  solution: string;
  compound: string;
  reagent: string;
  observation: string;
  catalyst: string;
  observationGeneral: string;
  substance1: string;
  substance2: string;
  substance3: string;
  substance4: string;
};
