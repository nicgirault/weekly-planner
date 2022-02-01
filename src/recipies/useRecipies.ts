import useLocaleStorage from "@rehooks/local-storage";
import { useCallback } from "react";

export interface Recipie {
  name: string;
}

export const useRecipies = () => {
  const [recipies, setRecipies] = useLocaleStorage<Recipie[]>(
    "WP/recipies",
    []
  );

  const add = useCallback(
    (recipie: Recipie) => {
      setRecipies([...recipies, recipie]);
    },
    [recipies, setRecipies]
  );

  const remove = useCallback(
    (index: number) => {
      setRecipies(recipies.filter((_, _index) => _index !== index));
    },
    [recipies, setRecipies]
  );

  return { add, remove, recipies };
};
