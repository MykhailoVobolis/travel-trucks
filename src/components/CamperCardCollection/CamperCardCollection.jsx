import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError } from "../../redux/campers/selectors.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import { incrementPage } from "../../redux/campers/slice.js";

import LoadMoreButton from "../LoadMoreButton/LoadMoreButton.jsx";
import CamperCard from "../CamperCard/CamperCard.jsx";

import css from "./CamperCardCollection.module.css";

export default function CamperCardCollection() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);
  const { morePages } = useSelector(selectCampers);
  const { items = [] } = campers;

  const handleLoadMore = () => {
    if (morePages) {
      dispatch(incrementPage());
      dispatch(fetchCampers());
    }
  };

  return (
    <div className={css.camperCardCollectionWrapper}>
      <ul className={css.collectionList}>
        {items.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {!error && morePages && <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>}
    </div>
  );
}
