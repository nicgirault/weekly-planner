import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { Menu } from "../Menu";
import { usePlanner } from "./usePlanner";

export const Planner = () => {
  const { recipies, plan, planning } = usePlanner();

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav aria-label="recipies">
        <List>
          {planning.map(({ recipie, meal }, mealIndex) => (
            <ListItem key={meal}>
              <ListItemText primary={meal} />
              <FormControl>
                <InputLabel id={`${meal} recipie label`}>Plat</InputLabel>
                <Select
                  labelId={`${meal} recipie label`}
                  id={`${meal} recipie`}
                  value={recipie?.name}
                  label="Age"
                  onChange={(event) =>
                    plan(
                      mealIndex,
                      recipies.find(
                        (recipie) => recipie.name === event.target.value
                      )!
                    )
                  }
                >
                  {recipies.map((recipie) => (
                    <MenuItem key={recipie.name} value={recipie.name}>
                      {recipie.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </ListItem>
          ))}
        </List>
      </nav>
      <Menu />
    </Box>
  );
};
