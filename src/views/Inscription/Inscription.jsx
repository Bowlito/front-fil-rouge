import { useNavigate } from "react-router-dom";
import "./Inscription.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../../config/Axios_config/axios.config.js";
import userSchema from "../../validators/users.validator.js";
import { useEffect, useState } from "react";

export default function Inscription() {
	const navigate = useNavigate();
	const [users, setUsers] = useState([])
	const [isSignedUp, setIsSignedUp] = useState(false)

	const { handleSubmit, register, formState: { errors, isValid, isSubmitSuccessful }, reset, } = useForm({
		resolver: yupResolver(userSchema),
		mode: "onChange",
	});

	useEffect(() => {
		axios
			.get(`/users`)
			.then(res => {setUsers(res.data),
				setIsSignedUp(false)
			})
			.catch(() => setErreur("Liste temporairement indisponible"))

	}, [])



	function addUser(formData) {
		axios
			.post("/users/signUp", formData)
			.then((res) => {
				setUsers(res.data),
				setIsSignedUp(true)
			});

		// navigate("/");

		reset();
	}

	return (
		<div className="container my-5 d-flex flex-column align-items-center text-light">
			<h2 className="mb-4">Page d'inscription</h2>

			{isSignedUp &&
				<div className="alert alert-info" role="alert">
					Inscription réussie
				</div>
			}

			<div className="w-100" style={{ maxWidth: "400px" }}>
				<form onSubmit={handleSubmit(addUser)} className="p-4 rounded shadow" style={{ backgroundColor: "rgba(15, 23, 51, 0.9)" }}
				>
					<div className="mb-3">
						<label htmlFor="nom" className="form-label">
							Nom
						</label>
						<input type="text" className="form-control" id="nom" aria-describedby="nomHelp" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "none", }}{...register("nom")} />
						{errors.nom && <span>{errors.nom.message}</span>}
					</div>
					<div className="mb-3">
						<label htmlFor="prenom" className="form-label">
							Prénom
						</label>
						<input type="text" className="form-control" id="prenom" aria-describedby="prenomHelp" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "none", }}{...register("prenom")} />
						{errors.prenom && <span>{errors.prenom.message}</span>}
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Adresse e-mail
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
							style={{
								backgroundColor: "rgba(255,255,255,0.1)",
								color: "#fff",
								border: "none",
							}}
							{...register("email")}
						/>
						{errors.email && <span>{errors.email.message}</span>}
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Mot de passe
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							style={{
								backgroundColor: "rgba(255,255,255,0.1)",
								color: "#fff",
								border: "none",
							}}
							{...register("password")}
						/>
						{errors.password && <span>{errors.password.message}</span>}
					</div>
					<button
						type="submit"
						className="btn btn-hover text-light w-100 mt-3 p-3"
						style={{
							backgroundColor: "rgba(139, 160, 236, 0.9)",
							borderRadius: "8px",
						}}
						disabled={!isValid}
					>
						S'inscrire
					</button>
				</form>
			</div>

		</div>
	);
}
