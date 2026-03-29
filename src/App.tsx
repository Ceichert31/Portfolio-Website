import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import ProjectPage from "./ProjectPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}