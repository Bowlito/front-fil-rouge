import { useEffect, useState } from "react";
import axios from "../../../config/Axios_config/axios.config.js";
import Post from "../../components/Post/Post.jsx";
import './Blog.css';

export default function Blog() {
    const [publications, setPublications] = useState([]);
    const [users, setUsers] = useState([]);
    const [erreur, setErreur] = useState("");

    useEffect(() => {
        axios
            .get(`/publications`)
            .then(res => setPublications(res.data))
            .catch(() => setErreur("Liste des posts temporairement indisponible"));
    }, []);

    useEffect(() => {
        axios
            .get(`/users`)
            .then(res => setUsers(res.data))
            .catch(() => setErreur("Liste des users temporairement indisponible"));
    }, []);

    return (
        <div className="container my-5 blog-container">
            <h2 className="text-light mb-4">Espace Blog</h2>
            <h3 className="text-light mb-5">Venez partager vos aventures !</h3>

            {/* <Post /> */}

            <div className="d-flex flex-column align-items-center gap-5">
                {publications.map((p, ind) => (
                    <div className="card blog-card w-100 shadow-sm" key={ind} style={{ minWidth: "45%" }}>
                        <div className="row align-items-center">
                            {/* Colonne principale avec texte et image */}
                            <div className="col-10">
                                <img
                                    src="/thumbnail_image0.jpg"
                                    className="card-img-top blog-image"
                                    alt={p.titre}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{p.titre}</h5>
                                    <p className="card-text flex-grow-1">{p.corps}</p>
                                </div>
                            </div>

                            
                            <div className="col-2 d-flex flex-column justify-content-center align-items-center gap-5">
                                
                                <button className="btn btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 48" width="50" height="48">
                                        <path
                                            d="M4 26 L4 18 Q4 12 10 12 L40 12 Q46 12 50 18 L58 26 Q60 28 60 32 L60 36 Q60 40 56 40 L8 40 Q4 40 4 36 Z"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
                                        />
                                        <rect x="10" y="16" width="10" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
                                        <rect x="22" y="16" width="12" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
                                        <rect x="36" y="16" width="10" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
                                        <circle cx="16" cy="38" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="46" cy="38" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>

                                
                                <button className="btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                                    </svg>
                                </button>

                                {/* Bouton Send */}
                                <button className="btn btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54l-2.8 7a.5.5 0 1 1-.928-.372l1.895-4.738-7.494 7.494 1.376 2.162a.5.5 0 1 1-.844.537l-1.531-2.407L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM5.93 9.363l7.494-7.494L1.591 6.602z" />
                                        <path fillRule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
