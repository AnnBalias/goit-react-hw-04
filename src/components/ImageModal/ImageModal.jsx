import Modal from 'react-modal';
import css from "./ImageModal.module.css"

Modal.setAppElement('#root');

const ImageModal = ({modalOpn, handClose, selectImg }) => {
   
    return (
        <Modal
            className={css.modal}
            isOpen={modalOpn}
            onRequestClose={handClose}
        >
            {selectImg &&
                <img
                    src={selectImg.urls.regular}
                    alt={selectImg.alt_description}
                />
            } 
        </Modal>
    )
}

export default ImageModal;