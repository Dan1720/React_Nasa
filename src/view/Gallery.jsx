import { useNavigate, useSearchParams } from "react-router-dom";
import { useNasaLibraryViewModel } from "../viewmodel/useNasaLibraryViewModel";
import ImageCard from "./components/ImageCard/ImageCard";
import style from "./Gallery.module.css";
import debounce from "lodash.debounce";
import { useMemo, useEffect} from "react";

/**
 * Componente View che si occupa del rendering della galleria e dell'interazione utente
 * 
 * Si occupa di:
 * - Gestire la ricerca delle immagini NASA
 * - Sincronizzare lo stato della ricerca con l'URL
 * - Mostrare loading, risultati o messaggio di "nessun risultato"
 * - Gestire la navigazione verso il dettaglio immagine
 */
function Gallery(){
    // Gestione dei parametri di query nell'URL 
    const [searchParams, setSearchParams] = useSearchParams();

    // Recupera il valore della query
    const urlQuery = searchParams.get('search') || "Galaxy";

    // Hook ViewModel: gestisce la query di ricerca, recupera le immagini dalla
    // NASA API e fornisce lo stato di loading
    const { query, setQuery, images, loading } = useNasaLibraryViewModel(urlQuery);

    // Hook per la navigazione tra le pagine
    const navigate = useNavigate();

    /**
     * Mantiene sincronizzato lo stato interno (query) con il parametro presente nell'URL
     */
    useEffect(() => {
        setQuery(urlQuery);
    }, [urlQuery, setQuery]);

    /**
    * Funzione debounce per ritardare l'aggiornamento
    * del parametro di ricerca nell'URL.
    *
    * Riduce il numero di aggiornamenti durante la digitazione
    * migliorando l'esperienza utente e le performance.
    *
    * useMemo evita la ricreazione della funzione ad ogni render.
     */
    const debounceSetSearchParams = useMemo(
        () => debounce((val) => {
            setSearchParams(val ? {search: val}: {}, {replace: true});
        }, 3000),
        [setSearchParams]
    );

    /**
     * Questo effetto evita che la funzione di debounce venga eseguita quando il
     * componente non esiste più
     */
    useEffect(() => {
        return () => {
            debounceSetSearchParams.cancel();
        };
    }, [debounceSetSearchParams]);  

    /**
     * Gestione input di ricerca:
     * - aggiorna lo stato interno
     * - aggiorna l'URL in modo ritardato (debounce)
     */
    const handleSearchChange = (e) => {
        const val = e.target.value
        setQuery(val);
        debounceSetSearchParams(val)
    };

    // Verifica se non ci sono risultati
    const noResult = !loading && images.length == 0;
    return(
        <div className={style.galleryContainer}>

            {/* Barra di ricerca */}
            <div className={style.searchContainer}>
                <i className={`bi bi-search ${style.searchIcon}`}></i>
                <input
                type="text"
                className={style.searchInput}
                value={query}
                onChange={handleSearchChange}
                placeholder="Search Nasa Images"
            />
            </div>
            
            {/* Gestione stati */}
            {loading ? (
                <div className="container text-center">
                    Loading...
                </div>
            ): noResult ? (
                <div className="container text-center">
                    <h3>No result for "{query}"</h3>
                    <p>Check your spelling or try looking for something else.</p>
                </div>
            ) : (<div className="row">
                {images.map((item, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <ImageCard item={item}
                            onClick={() => 
                                navigate(`/gallery/image/${item.data[0].nasa_id}`, {
                                    state:{
                                        images, // lista corrente
                                        currentIndex: index, // posizione immagine
                                        fromSearch: `?search=${query}` // query corrente
                                    }
                                })
                            }/>
                    </div>
                ))}
            </div>
            )}
            

            
        </div>
    );
}
export default Gallery;