import { useNavigate } from "react-router-dom";
import style from "../NotFound/NotFound.module.css"

function NotFoundImage({ nasaId, fromSearch }){
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/gallery${fromSearch}`)
    }

    return(
        <div className="container text-center">
            <h1>Image Not Found!!</h1>
            <p>We couldn't retrieve the data for ID: <strong>{nasaId}</strong></p>
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