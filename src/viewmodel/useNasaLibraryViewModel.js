import { useEffect, useState } from "react";
import { fetchImagesByID, searchImages } from "../model/NasaImageLibrary";

export function useNasaLibraryViewModel(initialQuery="Galaxy") {
    const [query, setQuery] = useState(initialQuery);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        if(!query){
            return;
        }

        let isActive = true;
        searchImages(query)
            .then((data) => {
                if(isActive) {
                    setImages(data);
                }
            })
            .finally(() => {
                if(isActive){
                    setLoading(false);
                }
            })
        return () => {
            isActive = false;
        };

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