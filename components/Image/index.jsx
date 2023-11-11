"use client";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

// const Image = ({ src, placeholderSrc, title, name, effect, alt }) => {
const Image = ({ src, placeholdersrc, alt }) => {
    return ( 
        <LazyLoadImage
            className="image"
            src={src}
            placeholderSrc={placeholdersrc}
            alt={alt}
        />
    );
}
 
export default Image;