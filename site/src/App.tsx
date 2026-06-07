import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import CatanEngine from "./pages/projects/CatanEngine";
import DiffusionCoDesign from "./pages/publications/DiffusionCoDesign";
import GeometricGovernance from "./pages/publications/GeometricGovernance";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="publications" element={<Publications />} />
        <Route
          path="publications/diffusion-co-design"
          element={<DiffusionCoDesign />}
        />
        <Route
          path="publications/geometric-governance"
          element={<GeometricGovernance />}
        />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/catan-engine" element={<CatanEngine />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
