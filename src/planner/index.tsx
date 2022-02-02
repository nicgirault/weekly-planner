import { Box, List } from "@mui/material";
import { Menu } from "../Menu";
import { MealPlanner } from "./MealPlanner";
import { usePlanner } from "./usePlanner";

export const Planner = () => {
  const { plan, days, getPlannedRecipies } = usePlanner();

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav aria-label="recipies">
        <List>
          {days.map((day) => (
            <>
              {(["lunch", "dinner"] as const).map((meal) => (
                <MealPlanner
                  key={`${day}-${meal}`}
                  meal={meal}
                  date={day}
                  plannedRecipies={getPlannedRecipies(day, meal)}
                  plan={(recipies) => plan(day, meal, recipies)}
                />
              ))}
            </>
          ))}
        </List>
      </nav>
      <Menu />
    </Box>
  );
};
