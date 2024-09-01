import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout.jsx";

import "./App.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CampersPage = lazy(() => import("../../pages/CampersPage/CampersPage.jsx"));
const CamperDetailsPage = lazy(() => import("../../pages/CamperDetailsPage/CamperDetailsPage.jsx"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}></Route>
      </Routes>
    </Layout>
  );
}
