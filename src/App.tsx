import Recipies from "./recipies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewRecipie } from "./recipies/AddRecipie";
import { Planner } from "./planner";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Planner />} />
        <Route path="/recipies" element={<Recipies />}>
          <Route path="new" element={<NewRecipie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// 1. ajouter un bouton pour accéder aux recettes
// 2. reset
// 3. proposer de remplir automatiquement par jour ou semaine entière
// 4. BDD
// 5. liste de courses
// 6. premier repas de la semaine
// 7. entrée/plat/dessert plat => féculent/légume/viande
