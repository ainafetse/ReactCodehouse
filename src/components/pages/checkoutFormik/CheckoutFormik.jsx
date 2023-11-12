import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      repeatPassword: "",
    },

    onSubmit: (data) => {
      console.log("Sent");
      console.log(data);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      name: Yup.string()
        .required("This field is required")
        .min(5, "it must have at least five characters")
        .max(20, "it must not be over 20 characters"),
      lastname: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("The email doesn't seem to be valid, add @")
        .required("This field is required"),
      password: Yup.string()
        .required("This field is required")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "Password must contain at least one capital letter, one number, and one special character and be 8 charachte",
        }),
      repeatPassword: Yup.string()
        .required("This field is required")
        .oneOf([Yup.ref("password")], "Passwords don't match"),
    }),
  });

  return (
    <div style={{ padding: "50px", backgroundColor:"white"}}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />

        <TextField
          label="Last Name"
          variant="outlined"
          name="lastname"
          onChange={handleChange}
          error={errors.lastname ? true : false}
          helperText={errors.lastname}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="Repeat password"
          variant="outlined"
          name="repeatPassword"
          onChange={handleChange}
          error={errors.repeatPassword ? true : false}
          helperText={errors.repeatPassword}
        />

        <Button variant="contained" type="submit">
          Send
        </Button>

        <Button variant={"outlined"} type="button">
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;