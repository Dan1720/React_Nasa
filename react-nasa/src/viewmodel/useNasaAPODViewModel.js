import { useEffect, useState } from "react";
import { fetchAPOD } from "../model/NasaModelAPOD";

export function useNasaAPODViewModel() {
    const [apod, setApod] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadAPOD() {
            try{
                const apod = await fetchAPOD();

                const apodData = {
                    title: apod.title,
                    date: apod.date,
                    explanation: apod.explanation,
                    hdurl: apod.hdurl,
                    copyright: apod.copyright
                };
                setApod(apodData);
            } catch (err){
                setError(err.message);
            }
        }

        loadAPOD();
    }, []);
    return { apod, error };
}