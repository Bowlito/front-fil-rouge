import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import axios from "../../../config/Axios_config/axios.config.js"
import { Link } from "react-router-dom"

export default function Profil() {

    const { user } = useContext(GlobalContext)
    const [countPost, setCountPost] = useState(null)
    const [userComs, setUserComs] = useState(null)
    const [famousPost, setFamousPost] = useState([])

    useEffect(() => {
        axios
            .get(`publications/count/${user.id}`)
            .then(res => {
                console.log(res.data);
                setCountPost(res.data)
            })
            .catch(error => { error.message })

        axios
            .get(`commentaires/post/${user.id}`)
            .then(res => {
                console.log(res.data);
                setUserComs(res.data)

            })
            .catch(error => { error.message })
        axios
            .get(`publications/famous/${user.id}`)
            .then(res => {
                console.log(res.data);
                setFamousPost(res.data)

            })
            .catch(error => { error.message })
    }, [])

    return (
        <>
            <h1>Profil de  : {user?.prenom} </h1>
            <div>
                <p>E-mail : {user.email}</p>
                <p>Nombre de publications : {countPost}</p>
                <p>Nombre de commentaires : {userComs} </p>
                {console.log(famousPost)
                }
                {
                    countPost > 0 ?
                        <>
                            {famousPost?.nbrComs !== 0 ? <p>Ma publication la plus populaire :<Link className="btn text-warning" to={`/post/${famousPost.id_publication}`}> {famousPost?.titre} </Link></p> : <p>Vos publications n'ont pas la cote</p>}

                        </>
                        :
                        <>
                            <p>Aucun post pour le moment</p>
                        </>
                }


            </div>
        </>
    )
}