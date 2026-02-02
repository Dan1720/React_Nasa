import { useEffect, useState } from "react";
import { fetchImagesByID, searchImages } from "../model/NasaImageLibrary";

export function useNasaLibraryViewModel() {
    const [query, setQuery] = useState("space");
    const [images, setImages] = useState([]);

    useEffect(() => {
        searchImages(query).then(setImages);
    }, [query]);

    return{
        query,
        setQuery,
        images,
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