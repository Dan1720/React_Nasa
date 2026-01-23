import { useEffect, useState } from "react";
import { searchImages } from "../model/NasaImageLibrary";

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