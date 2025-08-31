function Petcard({name, species, breed, onView}) {
    return (
        <div className="card bg-base-100 shadow">
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="text-sm opacity-70">{species}</p>
            <p className="text-sm opacity-70">{breed}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-sm"onClick={onView}>Ver</button>
            </div>
        </div>
        </div>


    )

}

export default Petcard;