import { Link } from "react-router-dom"

function Error() {
    return(
        <div className="content-error">
            <p className="content-error-type">Erreur 404</p>
            <p className="content-error-text">La page que vous cherchez semble introuvable </p>
            <p className="content-error-return-home"><Link to="/">Retourner au menu d'acceuil</Link></p>
        </div>
    )
}

export default Error