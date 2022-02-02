import useLocaleStorage from "@rehooks/local-storage";
import { useCallback } from "react";
import { Recipie } from "../recipies/useRecipies";
import { add, eachDayOfInterval, format } from "date-fns";

export type DailyMeal = "lunch" | "dinner";

export const usePlanner = () => {
  const [plannedMeals, setPlannedMeals] = useLocaleStorage<
    Record<string, { lunch: Recipie[]; dinner: Recipie[] }>
  >("WP/planning", {});

  const days = eachDayOfInterval({
    start: new Date(),
    end: add(new Date(), { days: 20 }),
  });

  const plan = useCallback(
    (date: Date, meal: DailyMeal, recipies: Recipie[]) => {
      const dateIdentifier = format(date, "yyyy-MM-dd");
      setPlannedMeals({
        ...plannedMeals,
        [dateIdentifier]: { ...plannedMeals[dateIdentifier], [meal]: recipies },
      });
    },
    [setPlannedMeals, plannedMeals]
  );

  const getPlannedRecipies = useCallback(
    (date: Date, meal: DailyMeal) => {
      const data = plannedMeals[format(date, "yyyy-MM-dd")];
      return data ? data[meal] || [] : [];
    },
    [plannedMeals]
  );

  return {
    getPlannedRecipies,
    days,
    plan,
  };
};
