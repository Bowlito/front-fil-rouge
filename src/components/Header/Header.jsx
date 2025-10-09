import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext"



export default function Header() {
  const { user, setUser } = useContext(GlobalContext)
  const { setIsAuthenticated } = useContext(GlobalContext)
  function logout() {
    setUser(null)
    localStorage.removeItem('nom')
    localStorage.removeItem('prenom')
    setIsAuthenticated(false)


  }

  return (
    <nav
      className="navbar navbar-expand-lg justify-content-between sticky-top"
      style={{ backgroundColor: " rgb(15, 23, 51)" }}
    >
      <div className="dropdown">
        <button
          className="btn"
          style={{ color: "#EB7D05" }}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <ul className="dropdown-menu " style={{ backgroundColor: "#eb7c05d0" }}>
          <li>
            <Link className="dropdown-item text-light list-bg" to="/">
              Accueil

            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light list-bg" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="dropdown-item text-light list-bg" to="/">
              Calcul d'itinéraires
            </Link>
          </li>
        </ul>
      </div>
      {user && 
      <div style={{ color: "#ff8c42" }}>
        Tripster : {user?.nom} {user?.prenom}
      </div>
      }
      {!user &&
        <div className="btn-group dropstart">
          <button
            className="btn m-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35   "
              fill="#EB7D05"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>

          </button>

          <ul className="dropdown-menu" style={{ backgroundColor: "#eb7c05d0" }}>
            <li>
              <Link className="dropdown-item text-light list-bg" to="/connexion">
                Se connecter
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-light list-bg"
                to="/inscription"
              >
                S'inscrire
              </Link>
            </li>
          </ul>
        </div>
      }
      {user &&
        <button className="btn m-2 info" style={{ color: "#eb7c05d0" }} onClick={logout}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
          <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
          <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
        </svg></button>
      }
    </nav>
  );
}
