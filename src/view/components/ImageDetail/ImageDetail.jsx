import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useNasaImageDetailViewModel } from "../../../viewmodel/useNasaLibraryViewModel";
import style from './ImageDetail.module.css';
import NotFound from "../NotFound/NotFound";
import NotFoundImage from "../NotFoundImage/NotFoundImage";

function ImageDetail(){
    const { nasaId } = useParams();
    const { image, loading } = useNasaImageDetailViewModel(nasaId);
    const location = useLocation();
    const { images=[], currentIndex = 0, fromSearch = "?search=Galaxy"} = location.state || {};
    const navigate = useNavigate();

    const currentImage = images.length ? images[currentIndex]: image;

    if(loading && !currentImage){
        return(
            <div className="text-center my-5">
                <div className="spinner-border" role="status" />
                <p className="mt-3">Loading image...</p>
            </div>
        );
    }

    if(!currentImage || !currentImage.data){
        return(
            <NotFoundImage 
                nasaId = {nasaId}
                fromSearch = {fromSearch}
            />
        )
    }

    

    const data = currentImage.data[0];
    const imgUrl = currentImage.links?.[0]?.href;

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

    console.log("Stato ricevuto:", location.state);

    const goBack = () => {
        navigate(`/gallery${fromSearch}`)
    }

    return(
        <div className="container text-center">
            <div className="d-flex justify-content-between my-4">
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
            <h2>{data.title}</h2>
            <div>
                <img src={imgUrl} className="img-fluid my-4" alt={data.title} />
            </div>
            
            <p>{data.description}</p>

        </div>
    );
}

export default ImageDetail;