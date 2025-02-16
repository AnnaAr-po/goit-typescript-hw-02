import ImageCard from "../ImageCard/ImageCard"; 
import css from "./ImageGallery.module.css";
import { Image } from "../types/types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}


const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery_list}>
      {images.map((image) => (
        <li key={image.id}>
          <div>
            <ImageCard
              src={image.urls.small} alt={image.alt_description || "Image"}  onClick={() => onImageClick(image)} 
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
