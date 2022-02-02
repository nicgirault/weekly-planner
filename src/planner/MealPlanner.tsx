import {
  capitalize,
  FormControl,
  InputLabel,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { format } from "date-fns";
import { Recipie, useRecipies } from "../recipies/useRecipies";
import { fr } from "date-fns/locale";
import { DailyMeal } from "./usePlanner";
interface MealPlannerProps {
  date: Date;
  meal: DailyMeal;
  plannedRecipies: Recipie[];
  plan: (recipies: Recipie[]) => void;
}

export const MealPlanner: React.FC<MealPlannerProps> = ({
  meal,
  date,
  plan,
  plannedRecipies,
}) => {
  const { recipies } = useRecipies();

  return (
    <ListItem>
      <ListItemText
        primary={`${capitalize(format(date, "iiii", { locale: fr }))} ${
          meal === "lunch" ? "midi" : "soir"
        } (${format(date, "d MMMM", { locale: fr })})`}
      />
      <FormControl>
        <InputLabel id={`${meal} recipie label`}>Plat</InputLabel>
        <Select
          labelId={`${meal} recipie label`}
          id={`${meal} recipie`}
          value={plannedRecipies.map((recipie) => recipie.name)}
          label="Plat"
          multiple
          onChange={(event) => {
            const selectedRecipieNames =
              event.target.value === "string"
                ? event.target.value.split(",")
                : event.target.value;
            plan(
              recipies.filter((recipie) =>
                selectedRecipieNames.includes(recipie.name)
              )
            );
          }}
        >
          {recipies.map((recipie) => (
            <MenuItem key={recipie.name} value={recipie.name}>
              {recipie.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItem>
  );
};
