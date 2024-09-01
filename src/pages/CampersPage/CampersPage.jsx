import { Toaster } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import { selectLoading } from "../../redux/campers/selectors.js";

import CamperCardCollection from "../../components/CamperCardCollection/CamperCardCollection.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";

import css from "./CampersPage.module.css";

export default function CampersPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section className={css.catalog}>
      {loading && <Spinner isLoading={loading} />}
      <div className={css.container}>
        <FilterForm />
        <CamperCardCollection />
      </div>
      <Toaster position="top-right" containerStyle={{ zIndex: 9999 }} />
    </section>
  );
}
