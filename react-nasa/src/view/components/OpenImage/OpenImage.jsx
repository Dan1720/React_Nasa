function OpenImage({ item, onClose, onPrevious, onNext }){
    const data = item.data[0];
    const imgUrl = item.link?.[0]?.href;

    return (
        <div
            className="modal d-flex justify-content-center align-items-center"
            style={{
                display: "flex",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: 1050,
            }}
            onClick={onClose}
        >
        <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // click dentro non chiude
            style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}
        >
            <img
                src={imgUrl}
                alt={data.title}
                style={{ width: "100%", height: "auto" }}
            />
            <h5 className="text-white mt-2">{data.title}</h5>

            <button
                className="btn btn-light position-absolute top-50 start-0"
                onClick={onPrevious}
            >
                Previous
            </button>
            <button
                className="btn btn-light position-absolute top-50 end-0"
                onClick={onNext}
            >
                Next
            </button>
            <button
                className="btn btn-danger position-absolute top-0 end-0"
                onClick={onClose}
            >
                X
            </button>
        </div>
        </div>
    );
}
export default OpenImage;
