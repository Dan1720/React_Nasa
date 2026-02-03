const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;
const BASE_URL_APOD = "https://api.nasa.gov/planetary/apod"

export async function fetchAPOD(){
    const response = await fetch(
        `${BASE_URL_APOD}?api_key=${API_KEY}`
    );

    if(!response.ok){
        throw new Error("Response Error from API")
    }

    return response.json()
}