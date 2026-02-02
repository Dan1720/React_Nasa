import { useNavigate } from "react-router-dom";
import { useNasaLibraryViewModel } from "../viewmodel/useNasaLibraryViewModel";
import ImageCard from "./components/ImageCard/ImageCard";
import "./Gallery.css";

function Gallery(){
    const { query, setQuery, images } = useNasaLibraryViewModel();
    const navigate = useNavigate();
    
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
                        <ImageCard item={item}
                            onClick={() => 
                                navigate(`/gallery/image/${item.data[0].nasa_id}`, {
                                    state:{
                                        images,
                                        currentIndex: index
                                    }
                                })
                            }/>
                    </div>
                ))}
            </div>

            
        </div>
    );
}
export default Gallery;