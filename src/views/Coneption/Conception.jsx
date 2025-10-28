import { Link } from "react-router-dom";

export default function Conception() {
    return (
        <>
            <h1 className="m-5">Conception du van</h1>

            <div className="d-flex justify-content-center">

                <div className="card-group row-sm gap-5">
                    <div className="blog-card text-light border-light col-sm p-3">

                        <img src="/scudo.png" className="card-img-top p-2" alt="scudo" />
                        <div className="card-body p-2">
                            <h6 className="card-title">Le modèle</h6>

                        </div>
                        <div className="card-footer">
                            <Link className="text-light"><small>Voir le détail</small></Link>
                        </div>
                    </div>

                    <div className="blog-card text-light border-light col-sm p-3">
                        <img src="/armaflex.jpg" className="card-img-top p-2" alt="armaflex" />
                        <div className="card-body p-2">
                            <h6 className="card-title">Les matériaux</h6>

                        </div>
                        <div className="card-footer">
                            <Link className="text-light"><small>Voir le détail</small></Link>
                        </div>
                    </div>

                    <div className="blog-card text-light border-light col-sm p-3">
                        <img src="..." className="card-img-top p-2" alt="..." />
                        <div className="card-body p-2">
                            <h6 className="card-title">L'aménagement</h6>
                            
                        </div>
                        <div className="card-footer">
                            <Link className="text-light"><small>Voir le détail</small></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}