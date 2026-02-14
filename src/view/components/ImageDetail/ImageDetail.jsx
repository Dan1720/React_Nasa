import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useNasaImageDetailViewModel } from "../../../viewmodel/useNasaLibraryViewModel";
import style from './ImageDetail.module.css';
import NotFound from "../NotFound/NotFound";
import NotFoundImage from "../NotFoundImage/NotFoundImage";

/**
 * Componente ImageDetail.
 * 
 * Si occupa di:
 * - Visualizzare i dettagli di una singola immagine NASA
 * - Gestire il caricamento dei dati tramite il ViewModel
 * - Fornire navigazione tra immagini precedenti e successive
 * - Gestire il caso di immagine non trovata o dati mancanti
 * 
 */
function ImageDetail(){
    // Id dell'immagine recuperato dai parametri URL
    const { nasaId } = useParams();

    // Hook ViewModel: carica i dettagli dell'immagine dal Model
    const { image, loading } = useNasaImageDetailViewModel(nasaId);

    // Stato ricevuto dalla navigazione
    const location = useLocation();
    const { images=[], currentIndex = 0, fromSearch = "?search=Galaxy"} = location.state || {};
    const navigate = useNavigate();

    // Utilizza l'immagine corrente
    const currentImage = images.length ? images[currentIndex]: image;

    // Mostra il caricamento se i dati non sono ancora disponibili
    if(loading && !currentImage){
        return(
            <div className="text-center my-5">
                <div className="spinner-border" role="status" />
                <p className="mt-3">Loading image...</p>
            </div>
        );
    }

    // Se l'immagine o i dati non esistono, mostra il componente NotFoundImage
    if(!currentImage || !currentImage.data){
        return(
            <NotFoundImage 
                nasaId = {nasaId}
                fromSearch = {fromSearch}
            />
        )
    }

    
    // Vengono estratti i dati principali dell'immagine
    const data = currentImage.data[0];
    const imgUrl = currentImage.links?.[0]?.href;

    // Funzioni per navigare tra le immagini della galleria
    const goPrevious = () => {
        if (currentIndex > 0) {
            const prevId = images[currentIndex - 1].data[0].nasa_id;
            navigate(`/gallery/image/${prevId}`, {
                state: {
                    images,
                    currentIndex: currentIndex - 1,
                    fromSearch
                }
            });
        }
    }
    const goNext = () => {
        if (currentIndex < images.length - 1) {
            const nextId = images[currentIndex + 1].data[0].nasa_id;
            navigate(`/gallery/image/${nextId}`, {
                state: {
                    images,
                    currentIndex: currentIndex + 1,
                    fromSearch
                }
            });
        }
    }

    // Torna alla galleria mantenendo la query di ricerca
    const goBack = () => {
        navigate(`/gallery${fromSearch}`)
    }

    return(
        <div className="container text-center">
            <div className="d-flex justify-content-between my-4">
                {/* Pulsanti di navigazione */}
                <button
                    className={style.buttonCustom}
                    onClick={goPrevious}
                    disabled={currentIndex===0 || images.length === 0}
                >
                    Previous
                </button>

                <button className={style.buttonCustom} onClick={goBack}>
                    Back to Gallery
                </button>

                <button
                    className={style.buttonCustom}
                    onClick={goNext}
                    disabled={currentIndex===images.length-1 || images.length === 0}
                >
                    Next
                </button>


            </div>
            {/* Titolo e immagine */}
            <h2>{data.title}</h2>
            <div>
                <img src={imgUrl} className="img-fluid my-4" alt={data.title} />
            </div>
            {/* Descrizione immagine */}
            <p>{data.description}</p>

        </div>
    );
}

export default ImageDetail;