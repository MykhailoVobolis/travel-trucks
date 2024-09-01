import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import CamperCardCollection from "../../components/CamperCardCollection/CamperCardCollection.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import { useEffect } from "react";
import { selectError, selectLoading } from "../../redux/campers/selectors.js";

import css from "./CampersPage.module.css";

export default function CampersPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section className={css.catalog}>
      {loading && <Spinner isLoading={loading} />}
      {error && <ErrorMessage error={error} />}
      <div className={css.container}>
        <FilterForm />
        <CamperCardCollection />
      </div>
    </section>
  );
}
