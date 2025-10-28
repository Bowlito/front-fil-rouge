import axios from "../../../config/Axios_config/axios.config.js";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Post.css';
import { formatDateTime } from "../../../config/date.utils.js";
import { GlobalContext } from "../../contexts/GlobalContext.jsx";
import Commentaires from "../../components/Commentaires/Commentaires.jsx";
import { useForm } from "react-hook-form";

export default function Post() {
    const { handleSubmit, register, reset } = useForm({ mode: "onChange" });
    const { user, isAuthenticated } = useContext(GlobalContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [auteur, setAuteur] = useState({});
    const [commentaires, setCommentaires] = useState([]);

    // Vérifier l'authentification
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/connexion');
        }
    }, [isAuthenticated, navigate]);

    // Charger le post et son auteur
    useEffect(() => {
        axios.get(`/publications/${id}`)
            .then(res => {
                setPost(res.data);
                return axios.get(`/users/${res.data.id_users}`);
            })
            .then(resUser => setAuteur(resUser.data))
            .catch(err => console.error(err));
    }, [id]);


    //Pour charger les commentaires
    const loadCommentaires = () => {
        axios.get(`/publications/${id}/commentaires`)
            .then(res => setCommentaires(res.data))
            .catch(err => {
                console.error("Erreur lors du chargement des commentaires :", err);
                setCommentaires([]);
            });
    };

    useEffect(() => {
        loadCommentaires();
    }, [id]);

    // Ajouter un commentaire
    function commenter(formData) {
        if (!formData.corps || formData.corps.trim() === "") {
            alert("Le commentaire ne peut pas être vide !");
            return;
        }

        formData.id_users = user.id;
        formData.id_publication = id;

        axios.post('/commentaires', formData)
            .then(() => {
                reset();
                loadCommentaires();
            })
            .catch(err => console.error("Erreur ajout commentaire :", err));
    }

    return (
        <div>
            <div className="container my-5 post-container">
                {/* Post principal */}
                <div className="card post-card shadow-sm w-100" style={{ minWidth: "60%" }}>
                    <Link className="align-self-start btn text-light" to={"/blog"}>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-caret-left-square-fill m-1" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12" />
                        </svg>
                        Retour blog
                    </Link>
                    <div className="mb-2">
                        Publié par <span style={{ color: "orange", fontSize: "larger" }}>
                            {auteur.nom} {auteur.prenom}
                        </span>
                    </div>
                    <img
                        src={post.chemin_image || "/thumbnail_image0.jpg"}
                        className="card-img-top post-image"
                        alt={post.titre}
                    />
                    <div className="card-body d-flex flex-column">
                        <h3 className="card-title">{post.titre}</h3>
                        <p className="card-text">{post.corps}</p>
                        <small className="text-light">
                            Publié le {formatDateTime(post.created_at)}
                        </small>
                    </div>
                </div>

                {/* Formulaire ajout commentaire */}
                <div className="card comment-form-card shadow-sm mt-4 p-3">
                    <h5 className="mb-3">Ajouter un commentaire</h5>
                    <form className="d-flex gap-2" onSubmit={handleSubmit(commenter)}>
                        <textarea
                            className="form-control"
                            placeholder="Écrivez votre commentaire..."
                            rows="3"
                            required
                            {...register("corps")}
                        ></textarea>
                        <button className="btn btn-primary">Envoyer</button>
                    </form>
                </div>

                {/* Affichage des commentaires */}
                <Commentaires
                    commentaires={commentaires}
                    currentUser={user}
                    reloadCommentaires={loadCommentaires}
                />
            </div>
        </div>
    );
}
