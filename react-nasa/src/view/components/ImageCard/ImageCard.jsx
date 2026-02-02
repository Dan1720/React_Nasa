import "../../Gallery.css";
function ImageCard({item, onClick}){
    const data = item.data[0];
    const imgUrl = item.links?.[0]?.href;
    


    return(
        <div className="card h-100 shadow-sm" onClick={onClick} style={{ cursor: "pointer" }}>
            <img src={imgUrl} className="card-img-top" alt={data.title} />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
            </div>
        </div>
    );
}
export default ImageCard;