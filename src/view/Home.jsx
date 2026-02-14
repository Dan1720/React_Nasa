import React from "react";
import style from "./Home.module.css"
import { useNasaAPODViewModel } from "../viewmodel/useNasaAPODViewModel";

/**
 * Componente View che si occupa del rendering dell'APOD (Astronomy Picture of the Day) e della presentazione delle relative informazioni.
 * 
 * Si occupa di:
 * - Recuperare i dati dell'APOD tramite il ViewModel
 * - Gestire eventuali errori
 * - Mostrare titolo, data, immagine e descrizione
 */

function Home(){
    // Hook ViewModel: fornisce i dati dell'APOD e lo stato di errore
    const { apod, error } = useNasaAPODViewModel();

    // Rendering condizionale in caso di errore
    if (error) return <p>Error: {error}</p>;

    // Non verrà renderizzato nulla se i dati non sono ancora disponibili
    if (!apod) return null;
    return(
        <article>
        <h1>{apod.title}</h1>
        <p>{apod.date}</p>

        {/* L'immagine viene mostrata solo se presente (hdurl disponibile) */}
        {apod.hdurl && (
            <img
            src={apod.hdurl}
            alt={apod.title}
            width="500"
            />
        )}
        <div className={style.customPadding}>
            <p>{apod.explanation}</p>
            <small>© {apod.copyright}</small>
        </div>
        
        </article>
    );
}
export default Home;