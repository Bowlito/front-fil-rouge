import { Link } from "react-router-dom"
import "./Vignettes.css"

export default function Vignette() {

    let vignettes = [
        { titre: "Conception", description: "Découvrez la conception du van de son achat à sa mise en service", image: '/conception van background.webp' },
        { titre: "Itinéraires", description: "Les voyages que j'ai réalisé avec le bolide", image: '/itineraire background.webp' },
        { titre: "Campements", description: "Mes petits coins chill lors de mes roadtrips", image: '/campement_background.webp' }
    ]


    return (
        <>
            {
                vignettes.map((v, ind) =>
                    
                    <div className="card card-hover p-1 rounded-4 m-5" style={{ width: "18rem", backgroundColor: " rgba(15, 23, 51, 0.9)"}} key={ind}>
                        <Link className="btn text-light" to={`/${v.titre}`}>
                        <img  src={v.image} className="card-img-top rounded-4" alt={v.titre} />
                        <div className="card-body">
                            <h4>{v.titre}</h4>
                            <p className="card-text">{v.description}</p>
                        </div>
                        </Link>
                    </div>
                )
            }
        </>
    )
}