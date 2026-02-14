// API Key importata dal file di configurazione .env
const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;

// URL base della NASA APOD (Astronomy Picture of the Day)
const BASE_URL_APOD = "https://api.nasa.gov/planetary/apod"

/**
 * Recupera l'immagine del giorno (APOD) dalla NASA API.
 * 
 * Effettua una richiesta HTTP al servizio APOD utilizzando l'API Key.
 * In caso di risposta non valida, genera un errore.
 * 
 * @returns {Promise<Object>} Oggetto contenente i dati dell'immagine del giorno
 * @throws {Error} Se la risposta HTTP non è valida
 */
export async function fetchAPOD(){
    const response = await fetch(
        `${BASE_URL_APOD}?api_key=${API_KEY}`
    );

    // Verifica che la risposta sia valida
    if(!response.ok){
        throw new Error("Response Error from API")
    }

    // Restituisce i dati convertiti in formato json
    return response.json()
}