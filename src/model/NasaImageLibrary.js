// URL base della NASA Image and Video Library API
const BASE_URL_LIBRARY = "https://images-api.nasa.gov/"

/**
 * Effettua una ricerca di immagini trovate in base a una query testuale.
 * Restituisce la lista degli elementi contenuti nella risposta API.
 * 
 * @param {string} query - Parola chiave per la ricerca
 * @returns {Promise<Array>} Lista di immagini trovate 
 */
export async function searchImages(query){
    const response = await fetch(
        `${BASE_URL_LIBRARY}/search?q=${query}`
    );

    //Converte la risposta in formato JSON
    const data = await response.json();

    // Restituisce gli elementi della collezione
    return data.collection.items
}


/**
 * Recupera i dettagli di una singola immagine tramite il suo nasaID.
 * Gestisce eventuali errori o risposte non valide.
 * 
 * @param {string} nasaID - Identificativo univoco dell'immagine 
 * @returns {Promise<Object|null>} Oggetto immagine oppure null in caso di errore
 */
export async function fetchImagesByID(nasaID){
    try{
        const response = await fetch(
            `${BASE_URL_LIBRARY}/search?nasa_id=${nasaID}`
        );

        // Verifica che la risposta sia valida
        if (!response.ok) {
            throw new Error("Error while retrieving image")
        }
        const data = await response.json();

        // Restituisce il primo elemento trovato oppure null se assente
        return data.collection.items[0] ?? null;
    } catch(error){
        console.error("API Nasa Error:", error);
        return null;
    }
    
    
}