import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

const ImageGallery = ({arr}) => {
    return (
        <ul>
            { !arr ? "No images" : arr.map((item) => {
                return (
                    <li key={"item"}>
		                <ImageCard/>
	                </li>
                )
            })}
	    </ul>
    )
}

export default ImageGallery;