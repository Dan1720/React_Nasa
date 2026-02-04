const BASE_URL_LIBRARY = "https://images-api.nasa.gov/"

export async function searchImages(query){
    const response = await fetch(
        `${BASE_URL_LIBRARY}/search?q=${query}`
    );
    const data = await response.json();
    return data.collection.items
}

export async function fetchImagesByID(nasaID){
    try{
        const response = await fetch(
            `${BASE_URL_LIBRARY}/search?nasa_id=${nasaID}`
        );
        if (!response.ok) {
            throw new Error("Error while retrieving image")
        }
        const data = await response.json();
        return data.collection.items[0] ?? null;
    } catch(error){
        console.error("API Nasa Error:", error);
        return null;
    }
    
    
}