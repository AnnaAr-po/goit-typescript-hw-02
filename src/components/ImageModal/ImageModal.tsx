import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../types/types";


interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null; 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} 
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
    >
      <div className={css.modal_content} onClick={onClose}>
        <img className={css.img} src={image.urls.regular} alt={image.alt_description || "Image"} />
        <p style={{ textAlign: "center" }}>{image.alt_description || "No description available"}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
