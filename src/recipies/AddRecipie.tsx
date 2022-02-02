import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Recipie, useRecipies } from "./useRecipies";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";

export const NewRecipie = () => {
  const { register, handleSubmit } = useForm<Recipie>();
  const { add } = useRecipies();
  const navigate = useNavigate();

  return (
    <Dialog onClose={() => navigate("..", { replace: true })} open={true}>
      <DialogTitle>Ajouter une recette</DialogTitle>
      <form
        onSubmit={handleSubmit((recipie) => {
          add(recipie);
          navigate("..");
        })}
      >
        <DialogContent>
          <TextField
            {...register("name", { required: true })}
            label="Nom"
            autoFocus
            margin="dense"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate("..", { replace: true })}>
            Annuler
          </Button>
          <Button type="submit">Ajouter</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
