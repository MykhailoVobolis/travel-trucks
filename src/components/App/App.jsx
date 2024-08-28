import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout.jsx";

import "./App.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
