import { useEffect, useState } from "react";
import { fetchImagesByID, searchImages } from "../model/NasaImageLibrary";

export function useNasaLibraryViewModel(initialQuery="Galaxy") {
    const [query, setQuery] = useState(initialQuery);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        if (query){
            searchImages(query).then(setImages).finally(() => setLoading(false));
        }
        
    }, [query]);

    return{
        query,
        setQuery,
        images,
        loading
    };
}

export function useNasaImageDetailViewModel(nasaID){
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        if (!nasaID) return;

        fetchImagesByID(nasaID).then(setImage).finally(() => setLoading(false));
    }, [nasaID]);

    return{
        image,
        loading
    }
    
}