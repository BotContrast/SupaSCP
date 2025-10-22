function SCP({selectedSCP})
{
    let classStyleAlert = '';

    if (selectedSCP.class === "Euclid") {
        classStyleAlert = "alert alert-danger text-red text-center pt-2";
    }else{
        classStyleAlert = "alert alert-primary text-center pt-2";
    };


    return(
        
        <div className = "mt-5">
            <h2 className="text-center">Name: {selectedSCP.Name}</h2>
            {selectedSCP.Image ? (
                <img src={`${selectedSCP.Image}`} alt={selectedSCP.Name} className="rounded mx-auto img-fluid d-block" />
            ) : (
                <p className="text-center"><em>No image available for this SCP</em></p>
            )}
            <div class = "pt-2">
            <h3 className={classStyleAlert}>Object class: {selectedSCP.Class}</h3>
            </div>
            <div className="p-2 mt-3">
            <p><strong>Description: </strong>{selectedSCP.Description}</p>
            </div>
            <div className ="p-2 mt-3">
            <p><strong>Containment: </strong>{selectedSCP.Containment}</p>
            </div>
        </div>
    )
}

export default SCP;