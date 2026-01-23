const BASE_URL_LIBRARY = "https://images-api.nasa.gov/"

export async function searchImages(query){
    const response = await fetch(
        `${BASE_URL_LIBRARY}/search?q=${query}`
    );
    const data = await response.json();
    return data.collection.items
}