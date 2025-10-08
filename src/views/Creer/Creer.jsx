import { useContext, useState } from "react"
import axios from "../../../config/Axios_config/axios.config.js"
import { GlobalContext } from "../../contexts/GlobalContext.jsx"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Creer.css"

export default function Creer() {


    const { handleSubmit, register, formState: { errors, isValid, isSubmitSuccessful }, reset, } = useForm({
            // resolver: yupResolver(userSchema),
            mode: "onChange",
        });
    const {user} = useContext(GlobalContext)
    const navigate = useNavigate()


    function addPost(formData){

        console.log(user);
        const imgPath = formData.chemin_image[0].name
        
        formData.id_users = user.id
        formData.chemin_image = `/${imgPath}`
        //formData.chemin_image = FileList.chemin_image.name
        console.log(formData.chemin_image[0].name);
        
        console.log("LES DATA DU FORM : ", formData);
        
        
        axios

            .post(`/publications/create`,formData)
            .then(res => {
                
                console.log(res.data);
                navigate('/blog')
                
            })
    }

    return (
        <div>
            <h2 className="mt-3">Créer ta publication</h2>
            <div className="d-flex justify-content-center mt-5">
                <form className="was-validated d-flex flex-column gap-5" onSubmit={handleSubmit(addPost)}>

                    <div className="col-12 align-self-center">
                        <label htmlFor="validationServer01" className="form-label" >Titre de la publication</label>
                        <input type="text" className="form-control is-valid nice-area " style={{height:"4rem"}}  id="validationServer01" required {...register("titre")}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="validationTextarea" className="form-label">Description</label>
                        <textarea className="form-control nice-area " style={{height:"20rem"}} id="validationTextarea" placeholder="Ecrivez ici" required  {...register("corps")}></textarea>
                    </div>


                    <div className="mb-3">
                        <input type="file" className="form-control" aria-label="file example" required {...register("chemin_image")}/>
                    </div>

                    <div className="mb-3">
                        <button className="btn nice-button" type="submit">Publier</button>
                    </div>
                </form>
            </div>

        </div>
    )
}