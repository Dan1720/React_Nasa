import { useEffect, useState } from "react";
import { fetchAPOD } from "../model/NasaModelAPOD";

/**
 * ViewModel per la gestione dell'immagine del giorno (APOD)
 * 
 * Si occupa di:
 * - Recuperare i dati dal Model
 * - Gestire lo stato dell'immagine e degli errori
 * - Preparare i dati in un formato pronto per la View
 * @returns {Object} 
 */
export function useNasaAPODViewModel() {
    // Stato dell'immagine del giorno
    const [apod, setApod] = useState(null);
    
    // Stato per eventuali errori durante la chiamata API
    const [error, setError] = useState(null);

    useEffect(() => {
        /**
         * Funzione asincrona che recupera i dati dal Model.
         * L'errore viene intercettato e salvato nello stato
         */
        async function loadAPOD() {
            try{
                const apod = await fetchAPOD();

                // Seleziona solo i campi necessari alla View
                const apodData = {
                    title: apod.title,
                    date: apod.date,
                    explanation: apod.explanation,
                    hdurl: apod.hdurl,
                    copyright: apod.copyright
                };
                setApod(apodData);
            } catch (err){
                // Aggiorna lo stato di errore in caso di fallimento della richiesta
                setError(err.message);
            }
        }
        // Effettua la richiesta API una sola volta all'apertura della pagina (al montaggio del componente)
        loadAPOD();
    }, []);

    // Espone alla View solo lo stato necessario
    return { apod, error };
}