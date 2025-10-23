function SCP({selectedSCP})
{
    let classStyleAlert = '';

    if (selectedSCP.class === "Euclid") {
        classStyleAlert = "alert alert-danger text-red text-center pt-2";
    }else{
        classStyleAlert = "alert alert-primary text-center pt-2";
    };


    return(
<<<<<<< HEAD
        
        <div className = "mt-5">
            <h2 className="text-center">Name: {selectedSCP.Name}</h2>
=======
        <div>
            <h2 className="text-center">{selectedSCP.Name}</h2>
>>>>>>> 8a689c9df9657bc4b0ec226f66d15fc9d996827f
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