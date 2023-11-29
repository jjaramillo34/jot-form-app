import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import JotFormEmbed from "./components/JotFormEmbed";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plan" element={<JotFormEmbed />} />
        <Route path="/form" element={<JotFormEmbed />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
