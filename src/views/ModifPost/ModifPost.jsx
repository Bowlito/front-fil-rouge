import { useContext, useEffect, useState } from "react"
import axios from "../../../config/Axios_config/axios.config.js"
import { GlobalContext } from "../../contexts/GlobalContext.jsx"
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import "./ModifPost.css"

export default function ModifPost() {

    const { id } = useParams();

    const { handleSubmit, register, formState: { errors, isValid, isSubmitSuccessful }, reset, } = useForm({
        // resolver: yupResolver(userSchema),
        mode: "onChange",
    });
    const { user } = useContext(GlobalContext)
    const navigate = useNavigate()
    const [post, setPost] = useState({});
    


    useEffect(() => {
        axios.get(`/publications/${id}`)
            .then(res => {
                setPost(res.data);
                return axios.get(`/users/${res.data.id_users}`);
            })
            //.then(resUser => setAuteur(resUser.data))
            .catch(err => console.error(err));
    }, []);

    function modifier(formData) {


        formData.id_users = user.id
        formData.id_publication = post.id_publication

        if (formData.chemin_image?.[0]) {
            const imgPath = formData.chemin_image[0].name;
            formData.chemin_image = `/${imgPath}`;
        } else {
            formData.chemin_image = post.chemin_image;
        }

        if (!formData.titre) {
            formData.titre = post.titre
        }

        if (!formData.corps) {
            formData.corps = post.corps
        }

        axios
            .put(`/publications/modify`, formData)
            .then(res => {
                console.log(res.data);
                navigate('/blog')

            })

    }


    return (



        <div>

            <h2 className="mt-2">Modifier la publication</h2>
            <div className="d-flex justify-content-center mt-2">
                <form onSubmit={handleSubmit(modifier)} className="was-validated d-flex flex-column gap-2" >

                    <div className="col-12 align-self-center">
                        <label htmlFor="validationServer01" className="form-label" >Titre de la publication</label>
                        <input type="text" className="form-control is-valid nice-area " style={{ height: "4rem" }} id="validationServer01" defaultValue={post?.titre} required {...register("titre")} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="validationTextarea" className="form-label">Description</label>
                        <textarea className="form-control nice-area " style={{ height: "16rem" }} id="validationTextarea" placeholder="Ecrivez ici" defaultValue={post?.corps} required  {...register("corps")}></textarea>
                    </div>
                    <div className="mb-3">
                        {post.chemin_image && (
                            <div className="mb-2">
                                <p>Fichier actuel : { } </p>
                                <img src={post.chemin_image} alt="Image actuelle" className="img-thumbnail"
                                    style={{ maxWidth: "20rem" }} />
                            </div>
                        )}
                        <input type="file" className="form-control" aria-label="file example" {...register("chemin_image")}
                            required={!post.chemin_image}
                        />
                        {

                        }
                    </div>


                    <div className="mb-3">
                        <button className="btn nice-button">Modifier</button>
                    </div>

                </form>
            </div >

        </div >

    )
}