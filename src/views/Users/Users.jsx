import { useContext, useEffect, useState } from "react"
import axios from "../../../config/Axios_config/axios.config.js"
import { GlobalContext } from "../../contexts/GlobalContext.jsx"
import { Link } from "react-router-dom"

export default function Users() {

    const [users, setUsers] = useState([])
    const { user } = useContext(GlobalContext)

    useEffect(() => {
        axios
            .get("/users")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err.response.data) || err)
    }, [])

    return (
        <div>
            {user?.role === "admin" &&
                <>
                    <h1>Liste des utilisateurs</h1>

                    <div>
                        <ul>
                            {users.map(user => (
                                <li key={user.id_users}>{user.nom} {user.prenom}</li>
                            ))}
                        </ul>
                    </div>
                </>
            }
            {user?.role !=="admin" &&
            <>
                <h1>Vous n'avez pas les autorisations necessaires</h1>
                <Link to={"/"} className="btn btn-danger">Retour à l'accueil</Link>
            </>

            }
        </div>
    )
}