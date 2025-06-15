import { useState, useEffect } from "react";

function useSearch(delay = 500) {
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, delay);

    return () => clearTimeout(handler); // limpa o timeout anterior
  }, [keyword, delay]);

  return {
    keyword,
    setKeyword,
    debouncedKeyword,
  };
}

export default useSearch;
