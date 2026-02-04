import { useNavigate, useSearchParams } from "react-router-dom";
import { useNasaLibraryViewModel } from "../viewmodel/useNasaLibraryViewModel";
import ImageCard from "./components/ImageCard/ImageCard";
import "./Gallery.css";


function Gallery(){
    const [searchParams, setSearchParams] = useSearchParams();
    const urlQuery = searchParams.get('search') || "Space";
    const { query, setQuery, images } = useNasaLibraryViewModel(urlQuery);
    const navigate = useNavigate();
    


    const handleSearchChange = (e) => {
        const val = e.target.value
        setQuery(val);
        setSearchParams(val ? {search: val}: {}, {replace: true})
    };
    
    return(
        <div className="gallery-container">
            <div className="search-container">
                <i className="bi bi-search search-icon"></i>
                <input
                type="text"
                className="search-input"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search Nasa Images"
            />
            </div>
            

            <div className="row">
                {images.map((item, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <ImageCard item={item}
                            onClick={() => 
                                navigate(`/gallery/image/${item.data[0].nasa_id}`, {
                                    state:{
                                        images,
                                        currentIndex: index,
                                        fromSearch: `?search=${query}`
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