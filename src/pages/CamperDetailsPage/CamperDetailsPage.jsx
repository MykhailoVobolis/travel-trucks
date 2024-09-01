import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError, selectLoading } from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations.js";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import AboutCamper from "../../components/AboutCamper/AboutCamper.jsx";
import css from "./CamperDetailsPage.module.css";

export default function CamperDetailsPage() {
  const dispatch = useDispatch();
  const { currentItem } = useSelector(selectCampers);
  const { id } = useParams();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <section className={css.camper}>
      {loading && <Spinner isLoading={loading} />}
      {error && <ErrorMessage error={error} />}
      <div className={css.container}>{currentItem && <AboutCamper camper={currentItem} />}</div>
    </section>
  );
}
