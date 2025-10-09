import React, { useState } from "react";
import { formatDateTime } from "../../../config/date.utils.js";
import axios from "../../../config/Axios_config/axios.config.js";
import "./Commentaire.css";

export default function Commentaires({ commentaires, currentUser, reloadCommentaires }) {
    const [iMod, setImod] = useState(null);
    const [editedText, setEditedText] = useState("");


    const supprimerCom = (comId) => {
        axios.delete(`/commentaires/${comId}`)
            .then(() => reloadCommentaires())
            .catch(err => console.error("Erreur suppression commentaire :", err));
    };


    const modifierCom = (comId) => {
        if (!editedText || editedText.trim() === "") {
            alert("Le commentaire ne peut pas être vide !");
            return;
        }
        axios.put(`/commentaires`, { id_com: comId, corps: editedText })
            .then(() => {
                setImod(null);
                reloadCommentaires();
            })
            .catch(err => console.error("Erreur modification commentaire :", err));
    };

    return (
        <div className="card comments-card shadow-sm mt-4 p-3">
            <h5 className="mb-3">Commentaires</h5>
            <ul className="list-group list-group-flush">
                {commentaires.length > 0 ? (
                    commentaires.map(c => (
                        <li key={c.id_com} className="list-group-item text-start">
                            <div className="d-flex justify-content-between mb-2">
                                <strong>{c.nom} {c.prenom}</strong>
                                <small className="text-warning">{formatDateTime(c.created_at)}</small>
                            </div>

                            {iMod === c.id_com ? (
                                <>
                                    <textarea
                                        className="form-control txtForm mb-2"
                                        value={editedText}
                                        onChange={e => setEditedText(e.target.value)}
                                        autoFocus
                                    />
                                    <div className="d-flex justify-content-end">
                                        <button className="btn btn-primary m-2" onClick={() => modifierCom(c.id_com)}>
                                            Modifier
                                        </button>
                                        <button className="btn btn-secondary m-2" onClick={() => setImod(null)}>
                                            Annuler
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <p className="mb-0">{c.corps || "Aucun contenu"}</p>
                            )}
                            <div className="mt-3 d-flex justify-content-end">
                                {currentUser?.id === c?.id_users && iMod !== c.id_com && (
                                    <button
                                        className="btn btn-primary m-2"
                                        onClick={() => { setImod(c.id_com); setEditedText(c.corps); }}
                                    >
                                        Éditer
                                    </button>
                                )}
                                {(currentUser?.id === c?.id_users || currentUser?.role === "admin") && (
                                    <button
                                        className="btn btn-danger m-2"
                                        onClick={() => supprimerCom(c.id_com)}
                                    >
                                        Supprimer
                                    </button>
                                )}
                            </div>

                        </li>
                    ))
                ) : (
                    <li className="list-group-item text-light">
                        Aucun commentaire pour ce post.
                    </li>
                )}
            </ul>
        </div>
    );
}
