import { useNavigate } from "react-router-dom";
import"./Connexion.css"

export default function Connexion() {

    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        console.log('Je me connecte');
        navigate('/');
    }

    return (
        <div className="container my-5 d-flex flex-column align-items-center text-light">
            <h2 className="mb-4">Page de Connexion</h2>

            <div className="w-100" style={{ maxWidth: '400px' }}>
                <form 
                    onSubmit={login} 
                    className="p-4 rounded shadow"
                    style={{ backgroundColor: "rgba(15, 23, 51, 0.9)" }}
                >
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Adresse e-mail</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "none" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "none" }}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn text-light w-100 mt-3 p-3 btn-hover"
                        style={{ backgroundColor: "rgba(139, 160, 236, 0.9)", borderRadius: '8px' }}
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    )
}
