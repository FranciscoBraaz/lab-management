export async function fetchRoutines(debouncedKeyword: string = '') {
  const response = await fetch(
    `https://684f41b9f0c9c9848d2a7fe7.mockapi.io/api/routines?title=${debouncedKeyword}`
  );

  const data = await response.json();

  return data;
}
