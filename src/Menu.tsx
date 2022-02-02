import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LocalDining from "@mui/icons-material/LocalDining";
import { useNavigate } from "react-router-dom";

const actions = [{ icon: <LocalDining />, name: "Recettes", path: "recipies" }];

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <SpeedDial
      ariaLabel="menu"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => navigate(action.path)}
        />
      ))}
    </SpeedDial>
  );
};
