import { Link } from "react-router-dom";
import "../Home/Home.css"
import Vignette from "../../components/Vignettes/Vignettes";


export default function Home() {
    return (
        <>
            <h1 className="mt-5 text-shadow fw-bold" style={{color: "#EB7D05"}}>Bienvenue sur Tripster</h1>

            <h2 className="mt-5 text-shadow fw-bold" style={{color: "#EB7D05"}}>Ce blog est dédié au partage de mes aventures en roadtrip avec mon van.</h2>
            <h2 className="m-5 text-shadow fw-bold" style={{color: "#EB7D05"}}>Venez découvrir mes roadtrips !</h2>

            <div className="row gap-5 justify-content-center mt-5 w-100">

                <Vignette />
            </div>


        </>
    )
}