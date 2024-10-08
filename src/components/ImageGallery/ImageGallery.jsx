import { nanoid } from "nanoid";

import ImageCard from "../ImageCard/ImageCard.jsx";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ gallery, onClick }) {
  return (
    <div>
      <ul className={css.galleryList}>
        {gallery.map((item) => (
          <li className={css.galleryItem} key={nanoid()}>
            <ImageCard image={item} onClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}
