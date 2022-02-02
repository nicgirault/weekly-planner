import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import { useRecipies } from "./useRecipies";
import { Fab, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Outlet } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Recipies() {
  const { recipies, remove } = useRecipies();

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav aria-label="recipies">
        <List>
          {recipies.map(({ name }, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => remove(index)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Outlet />
      <Fab
        color="primary"
        aria-label="add"
        href="/recipies/new"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
