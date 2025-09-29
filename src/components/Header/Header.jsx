import { Link } from "react-router-dom";

function search(event) {

    event.preventDefault()
    console.log("Je cherche");

}

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg justify-content-between sticky-top" style={{backgroundColor:" rgb(15, 23, 51)"}}>
            <div className="dropdown">
                <button className="btn dropdown-toggle text-warning" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                </button>
                <ul className="dropdown-menu bg-warning">
                    <li><Link className="dropdown-item " style={{color:" rgb(15, 23, 51)"}} to="/">Accueil</Link></li>
                    <li><Link className="dropdown-item " style={{color:" rgb(15, 23, 51)"}} to="/blog">Blog</Link></li>
                    <li><Link className="dropdown-item " style={{color:" rgb(15, 23, 51)"}} to="/">Calcul d'itinéraires</Link></li>
                </ul>
            </div>
            <form className="d-flex" role="search" onSubmit={search}>
                <input className="form-control me-2 w-100" type="search" placeholder="Rechercher" aria-label="Search" />
                <button className="btn btn-outline-none"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg></button>
            </form>
            <div className="btn-group dropstart">
                <button className="btn text-warning m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25   " fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                </button>
                <ul className="dropdown-menu bg-warning">
                    <li><Link className="dropdown-item" style={{color:" rgb(15, 23, 51)"}} to="/connexion">Se connecter</Link></li>
                    <li><Link className="dropdown-item" style={{color:" rgb(15, 23, 51)"}} to="/inscription">S'inscrire</Link></li>

                </ul>
            </div>


        </nav >
    )
}