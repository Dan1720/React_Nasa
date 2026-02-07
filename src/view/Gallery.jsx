import { useNavigate, useSearchParams } from "react-router-dom";
import { useNasaLibraryViewModel } from "../viewmodel/useNasaLibraryViewModel";
import ImageCard from "./components/ImageCard/ImageCard";
import "./Gallery.css";
import debounce from "lodash.debounce";
import { useMemo, useEffect} from "react";

function Gallery(){
    const [searchParams, setSearchParams] = useSearchParams();
    const urlQuery = searchParams.get('search') || "Galaxy";
    const { query, setQuery, images, loading } = useNasaLibraryViewModel(urlQuery);
    const navigate = useNavigate();

    
    useEffect(() => {
        setQuery(urlQuery);
    }, [urlQuery, setQuery]);

    const debounceSetSearchParams = useMemo(
        () => debounce((val) => {
            setSearchParams(val ? {search: val}: {}, {replace: true});
        }, 3000),
        [setSearchParams]
    );
    useEffect(() => {
        return () => {
            debounceSetSearchParams.cancel();
        };
    }, [debounceSetSearchParams]);
    const handleSearchChange = (e) => {
        const val = e.target.value
        setQuery(val);
        debounceSetSearchParams(val)
    };
    const noResult = !loading && images.length == 0;
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
            
            
            {loading ? (
                <div className="container text-center">
                    Loading...
                </div>
            ): noResult ? (
                <div className="container text-center">
                    <h3>No result for "{query}"</h3>
                    <p>Check your spelling or try looking for something else.</p>
                </div>
            ) : (<div className="row">
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
            )}
            

            
        </div>
    );
}
export default Gallery;