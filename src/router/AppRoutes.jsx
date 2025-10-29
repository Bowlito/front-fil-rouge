import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../views/Home/Home"
import Blog from "../views/Blog/Blog"
import Inscription from "../views/Inscription/Inscription"
import Connexion from "../views/Connexion/Connexion"
import Post from "../views/Post/Post"
import Creer from "../views/Creer/Creer"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import ModifPost from "../views/ModifPost/ModifPost"
import Conception from "../views/Coneption/Conception"
import Users from "../views/users/Users"


export default function AppRoutes() {

    const { isAuthenticated, user } = useContext(GlobalContext)



    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/connexion" element={isAuthenticated ? <Navigate to={"/"} /> : <Connexion />} />
            <Route path="/inscription" element={isAuthenticated ? <Navigate to={"/"} /> : <Inscription />} />


            <Route path="/conception" element={<Conception />} />
            <Route path="/blog" element={<Blog />} />



            <Route path="/users" element={ user?.role === "admin" ? <Users /> : <Navigate to={"/"} />} />


            <Route path="/post/:id" element={<Post />} />
            {isAuthenticated &&
                <>
                    <Route path="/creer" element={<Creer />} />

                </>
            }
            <Route path="/modif/:id" element={<ModifPost />} />
        </Routes>
    )
}