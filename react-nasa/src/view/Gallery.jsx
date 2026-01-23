import { useState } from "react";
import { useNasaLibraryViewModel } from "../viewmodel/useNasaLibraryViewModel";
import ImageCard from "./components/ImageCard/ImageCard";
import "./Gallery.css";
import OpenImage from "./components/OpenImage/OpenImage";

function Gallery(){
    const { query, setQuery, images } = useNasaLibraryViewModel();
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openImage = (index) => setSelectedIndex(index);
    const closeImage = () => setSelectedIndex(null);
    const showNext = () => {
        setSelectedIndex((prev) => 
            prev < images.length - 1 ? prev + 1: prev
        );
    };
    const showPrevious = () => {
        setSelectedIndex((prev) => 
            (prev > 0 ? prev - 1: prev)
        );
    };
    
    return(
        <div className="gallery-container">
            <input
                type="text"
                className="form-control mb-4"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Nasa Images"
            />

            <div className="row">
                {images.map((item, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <ImageCard item={item} onClick={() => openImage(index)} />
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <OpenImage 
                    item={images[selectedIndex]}
                    onClose={closeImage}
                    onPrevious={showPrevious}
                    onNext={showNext}
                />
            )}
        </div>
    );
}
export default Gallery;