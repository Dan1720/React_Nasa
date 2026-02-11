import React from "react";
import style from "./Home.module.css"
import { useNasaAPODViewModel } from "../viewmodel/useNasaAPODViewModel";

function Home(){
    const { apod, error } = useNasaAPODViewModel();

    if (error) return <p>Error: {error}</p>;
    if (!apod) return null;
    return(
        <article>
        <h1>{apod.title}</h1>
        <p>{apod.date}</p>

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