import { Routes, Route } from "react-router-dom"
import Home from "../views/Home/Home"
import Blog from "../views/Blog/Blog"
import Inscription from "../views/Inscription/Inscription"
import Connexion from "../views/Connexion/Connexion"
import Post from "../views/Post/Post"
import Creer from "../views/Creer/Creer"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function AppRoutes() {

    const { isAuthenticated } = useContext(GlobalContext)

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            {isAuthenticated &&
                <Route path="/creer" element={<Creer />} />
            }
        </Routes>
    )
}