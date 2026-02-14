import { useNavigate } from "react-router-dom";
import style from "./NotFound.module.css"

/**
 * Componente NotFound.
 * 
 * Si occupa di:
 * - Mostrare un messaggio 404 quando l'utente visita una pagina inesistente
 * - Fornire un pulsante per tornare alla Home
 */
function NotFound(){
    // Hook per gestire la navigazione programmata
    const navigate = useNavigate();

    // Funzione per tornare alla Home
    const goBack = () => {
        navigate(`/`)
    }

    return(
        <div className="container text-center">
            {/* Messaggio di errore */}
            <h1>404 - Page not found</h1>
            {/* Pulsante per tornare alla Home */}
            <button
                className={style.buttonCustom}
                onClick={goBack}
            >
                Go back to Home Page
            </button>
        </div>
    );
}
export default NotFound;