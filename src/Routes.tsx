// src/Routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App"; // Your main App component
import RepoDetails from "./components/RepoDetails"; // RepoDetails component

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/repo/:owner/:name" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
