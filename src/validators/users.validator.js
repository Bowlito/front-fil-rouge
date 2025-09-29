import yup from "../../config/Yup config/yup.config";

const userSchema = yup.object().shape({
  nom: yup
    .string()
    .required()
    .matches(
      /^[A-Z]{1}.{2,19}$/,
      "Le nom doit commencer par une majuscule et comporter entre 3 et 20 lettres"
    ),
  prenom: yup
    .string()
    .min(
      3,
      (args) =>
        `Le prénom doit contenir au moins ${args.min} caractères, valeur saisie : ${args.value} `
    )
    .max(20),
  email: yup
    .string()
    .required()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/),
  password: yup.string().required(),
});

export default userSchema