import React, { useState } from "react";
import "../styles/Register.scss";
import registerImg from "../assets/Image Placeholder (2).png";
import FormInput from "../FormInput";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: <i class="ri-user-line"></i>,
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: <i class="ri-mail-line"></i>,
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: <i class="ri-lock-line"></i>,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: <i class="ri-lock-line"></i>,
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const canSave = Boolean(values);

  return (
    <section className="register">
      <div className="register__wrapper">
        <div className="image">
          <img src={registerImg} alt="" />
        </div>
        <div className="content">
          <h1>Create Account</h1>
          <p>
            Go ahead and sign up,let everyone <br />
            know how awesome you are!{" "}
          </p>
          <form onSubmit={handleSubmit} className="register__form">
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <button className="btn1" type="submit" disabled={!canSave}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
