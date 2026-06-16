import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import SettlrlEngine from "./pages/projects/SettlrlEngine";
import DiffusionCoDesign from "./pages/publications/DiffusionCoDesign";
import GeometricGovernance from "./pages/publications/GeometricGovernance";
import NeuralMmo from "./pages/publications/NeuralMmo";

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
        <Route path="publications/neural-mmo" element={<NeuralMmo />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/settlrl-engine" element={<SettlrlEngine />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
