import axios from "../../../config/Axios_config/axios.config.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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


    // Charger les commentaires
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
                loadCommentaires(); // recharger tous les commentaires
            })
            .catch(err => console.error("Erreur ajout commentaire :", err));
    }

    return (
        <div>
            <div className="container my-5 post-container">
                {/* Post principal */}
                <div className="card post-card shadow-sm w-100" style={{ minWidth: "60%" }}>
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
                    reloadCommentaires={loadCommentaires} // passer la fonction pour reload
                />
            </div>
        </div>
    );
}
