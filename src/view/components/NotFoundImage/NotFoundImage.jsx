import { useNavigate } from "react-router-dom";
import style from "../NotFound/NotFound.module.css"

/**
 * Componente NotFoundImage.
 * 
 * Si occupa di:
 * - Mostrare un messaggio quando un'immagine specifica non è disponibile
 * - Visualizzare l'ID dell'immagine non trovata
 * - Fornire un pulsante per tornare alla Galleria mantenendo la query di ricerca
 * 
 * 
 */
function NotFoundImage({ nasaId, fromSearch }){
    // Hook per navigazione programmata
    const navigate = useNavigate();

    // Torna alla Galleria mantenendo la query originale
    const goBack = () => {
        navigate(`/gallery${fromSearch}`)
    }

    return(
        <div className="container text-center">
            {/* Messaggio immagine non trovata */}
            <h1>Image Not Found!!</h1>
            <p>We couldn't retrieve the data for ID: <strong>{nasaId}</strong></p>
            {/* Pulsante per tornare alla Galleria */}
            <button
                className={style.buttonCustom}
                onClick={goBack}
            >
                Go back to Gallery
            </button>
        </div>
    );
}
export default NotFoundImage;