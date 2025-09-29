import { Routes, Route } from "react-router-dom"
import Home from "../views/Home/Home"
import Blog from "../views/Blog/Blog"
import Inscription from "../views/Inscription/Inscription"
import Connexion from "../views/Connexion/Connexion"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )
}