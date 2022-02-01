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
