import style from "../../Gallery.module.css";

/**
 * Componente ImageCard.
 * 
 * Si occupa di:
 * - Visualizzare una singola immagine della NASA in formato card
 * - Mostrare il titolo dell'immagine
 * - Gestire il click sulla card tramite callback ricevuta dalle props
 * 
 * @param {{item, onClick}} 
 *  Item è un oggetto contenente i dati dell'immagine, mentre onClick è la funzione da eseguire 
 * quando la card viene cliccata
 *
 */
function ImageCard({item, onClick}){
    // Estrae i dati principali dell'immagine
    const data = item.data[0];

    // URL dell'immagine (può essere undefined)
    const imgUrl = item.links?.[0]?.href;
    


    return(
        <div className={`card h-100 ${style.customCard}`} onClick={onClick} style={{ cursor: "pointer" }}>
            {/* Immagine principale della card */}
            <img src={imgUrl} className={style.imgCardFixed} alt={data.title} />
             {/* Corpo della card con il titolo */}
            <div className={style.customCardBody}>
                <h5 className={style.customCardTitle}>{data.title}</h5>
            </div>
        </div>
    );
}
export default ImageCard;