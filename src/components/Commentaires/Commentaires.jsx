import { useContext, useEffect, useState } from "react";
import axios from "../../../config/Axios_config/axios.config.js";
import { formatDateTime } from "../../../config/date.utils.js";
import "./Commentaire.css";
import { GlobalContext } from "../../contexts/GlobalContext.jsx";

export default function Commentaires({ postId }) {

    const { user } = useContext(GlobalContext)
    const [erreur, setErreur] = useState("");

    const [commentaires, setCommentaires] = useState([]);

    useEffect(() => {
        if (!postId) return;

        axios
            .get(`/publications/${postId}/commentaires`)
            .then(res => 
                setCommentaires(res.data)
                
                
            )
            .catch(err => {
                console.error("Erreur lors du chargement des commentaires :", err);
                setCommentaires([]);
            });
    }, [postId, commentaires]);

    function supprimerCom(comId){
        axios
            .delete(`/commentaires/${comId}`)
            .then(()=>{
                setCommentaires(coms => coms.filter((c) => c.id_com !== comId))
                console.log("Commentaire supprimé avec succès")
            })
            .catch((erreur) => {
                console.error("Erreur de suppression :", erreur)
                setErreur("Impossible de supprimer ce commentaire pour le moment.");
            });
    }

    return (
        <div>
            <h2>Les commentaires</h2>

            <div className="card comments-card shadow-sm mt-4 p-3">
                <h5 className="mb-3">Commentaires</h5>
                <ul className="list-group list-group-flush">
                    {commentaires.length > 0 ? (
                        commentaires.map((c, ind) => (


                            <li key={ind} className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <strong>{c.nom} {c.prenom}</strong>
                                    <small className="text-warning">{formatDateTime(c.created_at)}</small>
                                </div>
                                <p className="mb-0">{c.corps || "Aucun contenu"}</p>
                                {(user?.id == c?.id_users|| user?.role == "admin") &&
                                    <button onClick={() => supprimerCom(c.id_com)}>Supprimer</button>
                                }
                            </li>

                        ))
                    ) : (
                        <li className="list-group-item text-light">
                            Aucun commentaire pour ce post.
                        </li>

                    )}
                </ul>

            </div>
        </div>
    )
}
