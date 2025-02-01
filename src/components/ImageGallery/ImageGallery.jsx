import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

const ImageGallery = ({ imgs, handModal }) => {
    
    return (
        <ul>
            {imgs.length > 0 && imgs.map((img) => {
                return (
                    <li key={img.id} onClick={() => handModal(img)}>
                        <ImageCard img={img} />
	                </li>
                )
            })}
	    </ul>
    )
}

export default ImageGallery;