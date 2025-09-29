import { Link } from "react-router-dom";
import "../Home/Home.css"
import Vignette from "../../components/Vignettes/Vignettes";


export default function Home() {
    return (
        <>
            <h1 className="mt-5 text-shadow fw-bold">Bienvenue sur tripster</h1>

            <h2 className="mt-5 text-shadow fw-bold">Ce blog est dédié au partage de mes aventures en roadtrip avec mon van.</h2>
            <h2 className="m-5 text-shadow fw-bold">Venez découvrir mes roadtrips !</h2>

            <div className="row gap-5 justify-content-center mt-5 w-100">

                <Vignette />
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="scroll_down"
                className="bounce">
                <path d="M4 8 L12 20 L20 8 Z" fill="white" />
            </svg>

        </>
    )
}