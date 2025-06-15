import { Routine } from "../types/routine";

export async function fetchRoutines(debouncedKeyword: string = "") {
  const response = await fetch(
    `https://684f41b9f0c9c9848d2a7fe7.mockapi.io/api/routines?title=${debouncedKeyword}&sortBy=createdAt&order=desc`
  );

  const data = await response.json();

  return data;
}

export async function createRoutine(
  formattedRotine: Omit<Routine, "id" | "createdAt">
) {
  await fetch("https://684f41b9f0c9c9848d2a7fe7.mockapi.io/api/routines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedRotine),
  });
}
