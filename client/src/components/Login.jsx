import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Title from "./_child/Title";
import Button from "./_child/Button";
import InputContainer, { ErrorMessage } from "./_child/InputContainer";

const Login = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);

  const formData = [
    { type: "text", name: "name", placeholder: "Enter name or email" },
    { type: "password", name: "password", placeholder: "Enter password" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let request, response;
    setLoading(true);
    request = await axios.post("http://localhost:5000/api/login", data);
    response = request.data;
    setLoading(false);

    if (response.error) return alert(response.error);
    navigation("/success");
  };

  const inputStyle =
    "border rounded py-2 px-3 text-neutral-600 focus:outline-blue-600";

  return (
    <>
      <Title
        onclick={() => navigation("/")}
        title={"Login"}
        text="Dont have an account ? Register"
      />

      {formData &&
        formData.map((input) => (
          <InputContainer lable={input.name} key={input.name}>
            <input
              type={input.type}
              name={input.name}
              className={inputStyle}
              placeholder={input.placeholder}
              {...register(input.name, { required: true })}
            />
            {errors.name && (
              <ErrorMessage
                error={
                  errors.name.type == "required" && "This field is required"
                }
              />
            )}
          </InputContainer>
        ))}
      <Button
        disabled={loading}
        onclick={handleSubmit(onSubmit)}
        text={loading ? "Loading..." : "Create account"}
      />
    </>
  );
};

export default Login;
