import { Link } from "react-router-dom";
import "./Vignettes.css";

export default function Vignette() {
  const vignettes = [
    { 
      titre: "Conception", 
      description: "Découvrez la conception du van de son achat à sa mise en service", 
      image: '/conception_van_background.webp' 
    },
    { 
      titre: "Itinéraires", 
      description: "Les voyages que j'ai réalisé avec le bolide", 
      image: '/itineraire background.webp' 
    },
    { 
      titre: "Campements", 
      description: "Mes petits coins chill lors de mes roadtrips", 
      image: '/campement_background.webp' 
    }
  ];

  return (
    <div className="vignettes-container">
      {vignettes.map((v, ind) => (
        <div className="vignette-card" key={ind}>
          <div className="card-inner">
            <div className="card-front">
              <img src={v.image} alt={v.titre} className="card-img-top" />
              <div className="card-body">
                <h4>{v.titre}</h4>
                <p>{v.description}</p>
              </div>
            </div>
            <div className="card-back">
              <p>Plus d’infos sur <strong> {v.titre}</strong> ici !</p>
              <Link to={`/${v.titre}`} className="btn-back">Voir</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
