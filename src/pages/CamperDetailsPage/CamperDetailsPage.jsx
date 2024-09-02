import { Toaster } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { selectCampers, selectError, selectLoading } from "../../redux/campers/selectors.js";
import { fetchCamperById } from "../../redux/campers/operations.js";
import { closeModal, openModal } from "../../redux/modal/slice.js";
import { selectStateModal } from "../../redux/modal/selectors.js";

import Spinner from "../../components/Spinner/Spinner.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import AboutCamper from "../../components/AboutCamper/AboutCamper.jsx";
import CamperInfoNavigation from "../../components/CamperInfoNavigation/CamperInfoNavigation.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import ImageModal from "../../components/ImageModal/ImageModal.jsx";

import css from "./CamperDetailsPage.module.css";

export default function CamperDetailsPage() {
  const dispatch = useDispatch();
  const { currentItem } = useSelector(selectCampers);
  const { id } = useParams();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isOpen = useSelector(selectStateModal);

  const [currentImageUrl, setCurrentImageUrl] = useState("");

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const handleOpenModal = (imageUrl) => {
    setCurrentImageUrl(imageUrl);
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <section className={css.camper}>
      {loading && <Spinner isLoading={loading} />}
      {error && <ErrorMessage error={error} />}
      {currentItem && (
        <div className={css.container}>
          <ImageModal isOpen={isOpen} onClose={handleCloseModal} imageUrl={currentImageUrl} />
          <AboutCamper camper={currentItem} onClick={handleOpenModal} />
          <CamperInfoNavigation />
          <div className={css.secondContainer}>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
            <BookingForm />
          </div>
        </div>
      )}
      <Toaster position="top-right" containerStyle={{ zIndex: 9999 }} />
    </section>
  );
}
