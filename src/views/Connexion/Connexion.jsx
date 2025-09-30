import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import "./Connexion.css"
import userSchema from "../../validators/users.validator.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../../config/Axios_config/axios.config.js";
import { GlobalContext } from "../../contexts/GlobalContext.jsx"


export default function Connexion() {
    const navigate = useNavigate();

    const { setUser } = useContext(GlobalContext)
    const { setIsAuthenticated } = useContext(GlobalContext)
    const { handleSubmit, register, formState: { errors, isValid, isSubmitSuccessful }, reset, } = useForm({
        //resolver: yupResolver(userSchema),
        mode: "onChange",
    });

function login(data) {
    console.log("BOUTON", data);

    axios
        .post("/users/login", { email: data.email, password: data.password })
        .then(res => {
            console.log("Connexion réussie", res.data);
            setUser(res.data);
            localStorage.setItem('prenom', res.data.prenom)
            localStorage.setItem('nom', res.data.nom)
            console.log(localStorage.nom);
            
            setIsAuthenticated(true)
            navigate('/');
        })
        .catch(err => console.error(err.response?.data || err));
}


    return (
        <div className="container my-5 d-flex flex-column align-items-center text-light">
            <h2 className="mb-4">Page de Connexion</h2>

            <div className="w-100" style={{ maxWidth: '400px' }}>
                <form onSubmit={handleSubmit(login)} className="p-4 rounded shadow" style={{ backgroundColor: "rgba(15, 23, 51, 0.9)" }}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Adresse e-mail</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "none" }} {...register("email")} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input type="password" className="form-control" id="password" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "none" }} {...register("password")} />
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    <button type="submit" className="btn text-light w-100 mt-3 p-3 btn-hover" style={{ backgroundColor: "rgba(139, 160, 236, 0.9)", borderRadius: '8px' }}>Se connecter</button>
                </form>
            </div>
        </div>
    )
}
