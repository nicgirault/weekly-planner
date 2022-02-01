import useLocaleStorage from "@rehooks/local-storage";
import { useCallback } from "react";
import { Recipie, useRecipies } from "../recipies/useRecipies";

export const usePlanner = () => {
  const [planning, setPlanning] = useLocaleStorage<Recipie[]>(
    "WP/planning",
    []
  );
  const { recipies } = useRecipies();

  const plan = useCallback(
    (mealIndex: number, recipie: Recipie) => {
      setPlanning(
        meals.map((_, _mealIndex) =>
          mealIndex === _mealIndex ? recipie : planning[_mealIndex]
        )
      );
    },
    [setPlanning, planning]
  );

  return {
    planning: meals.map((meal, index) => ({ meal, recipie: planning[index] })),
    recipies,
    plan,
  };
};

const meals = [
  "Lundi midi",
  "Lundi soir",
  "Mardi midi",
  "Mardi soir",
  "Mercredi midi",
  "Mercredi soir",
  "Jeudi midi",
  "Jeudi soir",
  "Vendredi midi",
  "Vendredi soir",
  "Samedi midi",
  "Samedi soir",
  "Dimanche midi",
  "Dimanche soir",
];
