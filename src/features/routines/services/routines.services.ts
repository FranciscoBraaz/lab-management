import { Routine } from "../types/routine";

export async function fetchRoutines(debouncedKeyword: string = "") {
  const response = await fetch(
    `https://684f41b9f0c9c9848d2a7fe7.mockapi.io/api/routines?sortBy=createdAt&order=desc&title=${debouncedKeyword}`
  );

  const data = await response.json();

  return data;
}

export async function createRoutine(
  formattedRotine: Omit<Routine, "id" | "createdAt">
) {
  const response = await fetch("https://684f41b9f0c9c9848d2a7fe7.mockapi.io/api/routines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedRotine),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || "Erro ao criar rotina")
  }
}
