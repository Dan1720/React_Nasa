import { useNavigate } from "react-router-dom";
import "./NotFound.css"
function NotFound(){
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/`)
    }

    return(
        <div className="container text-center">
            <h1>404 - Page not found</h1>
            <button
                className="button-custom"
                onClick={goBack}
            >
                Go back to Home Page
            </button>
        </div>
    );
}
export default NotFound;