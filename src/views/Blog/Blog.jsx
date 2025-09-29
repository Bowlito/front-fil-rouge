import { Link } from "react-router-dom";
import './Blog.css'; // fichier CSS pour la police et effets

export default function Blog() {
    const blogPosts = [
        {
            titre: "Découverte de la forêt",
            imageUrl: "/images/foret.jpg",
            description: "Un petit aperçu de ma randonnée en pleine nature...",
        },
        {
            titre: "Voyage en van",
            imageUrl: "/images/van.jpg",
            description: "Comment j’ai aménagé mon van pour voyager confortablement...",
        },
        {
            titre: "Cuisine en voyage",
            imageUrl: "/images/cuisine.jpg",
            description: "Des recettes simples et rapides à préparer en road trip...",
        }
    ];

    function commenter(e) {
        e.preventDefault();
        console.log("Je commente");
    }

    return (
        <div className="container my-5 blog-container">
            <h2 className="text-light mb-4">Espace Blog</h2>
            <h3 className="text-light mb-5">Venez partager vos aventures !</h3>

            <div className="d-flex flex-column align-items-center gap-5">
                {blogPosts.map((bp, ind) => (
                    <div
                        key={ind}
                        className="card blog-card w-100 shadow-sm"
                    >
                        <img
                            src={bp.imageUrl}
                            className="card-img-top blog-image"
                            alt={bp.titre}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{bp.titre}</h5>
                            <p className="card-text flex-grow-1">{bp.description}</p>

                            <form className="form-floating mt-3" onSubmit={commenter}>
                                <textarea
                                    className="form-control blog-textarea"
                                    placeholder="Leave a comment here"
                                    id={`floatingTextarea${ind}`}
                                ></textarea>

                                <button
                                    type="submit"
                                    className="btn text-light mt-3 blog-btn"
                                >
                                    Commenter
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
