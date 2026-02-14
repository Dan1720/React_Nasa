import { useEffect, useState } from "react";
import { fetchImagesByID, searchImages } from "../model/NasaImageLibrary";

/**
 * ViewModel per la gestione della galleria.
 * 
 * Si occupa di:
 * - Recuperare i dati dal Model quando la query cambia
 * - Gestire lo stato della query, delle immagini e del caricamento
 * - Prepara i dati in un formato pronto per la View
 * @param {string} initialQuery 
 * @returns { {query: string, setQuery: function, images: Array, loading: boolean} }
 *      Oggetto contenente la funzione per aggiornare la query, con anche la query stessa, 
 *          le immagini e lo stato della ricerca
 */
export function useNasaLibraryViewModel(initialQuery="Galaxy") {
    // Stato della query, inizializzato con il valore di default "Galaxy"
    const [query, setQuery] = useState(initialQuery);

    // Stato delle immagini
    const [images, setImages] = useState([]);

    // Stato del caricamento
    const [loading, setLoading] = useState(null);

    useEffect(() => {

        // Se la query è vuota, non viene eseguita nessuna richiesta
        if(!query){
            return;
        }

        // Variabile per evitare aggiornamenti di stato su componenti smontati
        let isActive = true;

        // Chiamata al Model per la ricerca delle immagini in base alla query
        searchImages(query)
            .then((data) => {
                // Dopo che la richiesta è completata con successo, aggiorna lo stato
                // delle immagini solo se il componente è ancora montato
                if(isActive) {
                    setImages(data);
                }
            })
            .finally(() => {
                // Indipendente dal risultato della richiesta (con componente ancora montato),
                // aggiorna lo stato di caricamento
                if(isActive){
                    setLoading(false);
                }
            })
        
            // Funzione eseguita quando il componente si smonta
        return () => {
            isActive = false;
        };
        // l'effetto si riesegue ogni volta che la query cambia
    }, [query]);

    // Espone alla View gli stati e la funzione per aggiornare la query
    return{
        query,
        setQuery,
        images,
        loading
    };
}


/**
 * ViewModel per la gestione del dettaglio di una singola immagine.
 * 
 * Questo hook si occupa di:
 * - Recuperare i dati dell'immagine dal Model usando il nasaID
 * - Gestire lo stato dell'immagine e del caricamento
 * - Preparare i dati in un formato pronto per la View
 * @param {string} nasaID 
 * @returns {{image: Object|null, loading: boolean}}
 *      Oggetto contenente i dati dell'immagine (o null se non disponibili) e 
 *      lo stato di caricamento
 */
export function useNasaImageDetailViewModel(nasaID){
    // Stato che conterrà i dati dell'immagine
    const [image, setImage] = useState(null);

    // Stato del caricamento
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        // Se non viene passato un ID, non si fa nulla
        if (!nasaID) return;

        // Chiamata al Model per recuperare i dettagli dell'immagine
        fetchImagesByID(nasaID).then(setImage).finally(() => setLoading(false));

        // L'effetto si riesegue quando cambia l'ID dell'immagine
    }, [nasaID]);

     // Espone alla View i dati della singola immagine e lo stato di caricamento
    return{
        image,
        loading
    }
    
}