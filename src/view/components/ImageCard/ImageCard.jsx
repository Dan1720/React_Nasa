import style from "../../Gallery.module.css";
function ImageCard({item, onClick}){
    const data = item.data[0];
    const imgUrl = item.links?.[0]?.href;
    


    return(
        <div className={`card h-100 ${style.customCard}`} onClick={onClick} style={{ cursor: "pointer" }}>
            <img src={imgUrl} className={style.imgCardFixed} alt={data.title} />
            <div className={style.customCardBody}>
                <h5 className={style.customCardTitle}>{data.title}</h5>
            </div>
        </div>
    );
}
export default ImageCard;