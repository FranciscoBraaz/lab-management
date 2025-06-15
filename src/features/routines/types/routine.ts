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
  substances: [string];
  createdAt: string;
}
