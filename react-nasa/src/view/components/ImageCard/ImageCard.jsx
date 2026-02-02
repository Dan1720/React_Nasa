import "../../Gallery.css";
function ImageCard({item, onClick}){
    const data = item.data[0];
    const imgUrl = item.links?.[0]?.href;
    


    return(
        <div className="card h-100 custom-card" onClick={onClick} style={{ cursor: "pointer" }}>
            <img src={imgUrl} className="card-img-top" alt={data.title} />
            <div className="custom-card-body">
                <h5 className="custom-card-title">{data.title}</h5>
            </div>
        </div>
    );
}
export default ImageCard;