import { useState } from "react";
import "./Conception.css";

export default function Conception() {
  // on garde l’état de chaque carte individuellement
  const [flippedCards, setFlippedCards] = useState([]);

  const cards = [
    { 
      titre: "Le modèle", 
      img: "/scudo.png", 
      detail: { modèle: "Fiat Scudo", année: "1998", capacité: "10m³" }
    },
    { 
      titre: "Les matériaux", 
      img: "/materiaux2.JPG", 
      detail: { isolation: "Armaflex", type: "Résistant à l’humidité" }
    },
    { 
      titre: "L’aménagement", 
      img: "/amenagement2.JPG", 
      detail: { placards: "Bois clair", lits: "Convertible 2 places" }
    }
  ];

  const handleFlip = (index) => {
    setFlippedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) 
        : [...prev, index] 
    );
  };

  return (
    <div className="conception-page text-light">
      <h1 className="conception-title">Conception du van</h1>

      <div className="conception-container">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`conception-card ${flippedCards.includes(index) ? "is-flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="conception-inner">
              <div className="conception-front">
                <img src={card.img} alt={card.titre} className="conception-img" />
                <h4 className="conception-card-title">{card.titre}</h4>
              </div>

              <div className="conception-back">
                <h5 className="conception-detail-title">Détails</h5>
                <ul className="conception-list">
                  {Object.entries(card.detail).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key} :</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
