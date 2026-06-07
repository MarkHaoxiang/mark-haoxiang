import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import CatanEngine from "./pages/projects/CatanEngine";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="publications" element={<Publications />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/catan-engine" element={<CatanEngine />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
