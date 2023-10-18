import { useForm } from "react-hook-form";
import Button from "./_child/Button";
import InputContainer, { ErrorMessage } from "./_child/InputContainer";
import Title from "./_child/Title";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigation = useNavigate();

  const formDate = [
    { type: "text", name: "name", placeholder: "enter name" },
    { type: "email", name: "email", placeholder: "enter email" },
    { type: "password", name: "password", placeholder: "enter password" },
  ];

  const radioFormData = [
    { type: "radio", name: "gender", value: "male", id: "male" },
    { type: "radio", name: "gender", value: "female", id: "female" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios.put(
      "http://localhost:5000/api/register",
      data
    );

    if (response.data.success == true) return navigation("/login");
  };

  const inputStyle =
    "border rounded py-2 px-3 capitalize text-neutral-600 focus:outline-blue-600";
  const genderClass =
    "flex item-center justify-between gap-2 cursor-pointer py-3 px-5 rounded bg-neutral-100";

  return (
    <>
      <Title
        onclick={() => navigation("/login")}
        title={"Register"}
        text="Already have an account ? Login"
      />

      {formDate &&
        formDate.map((input) => (
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

      <div className="flex gap-10 capitalize">
        {radioFormData.map((input) => (
          <div className={genderClass} key={input.value}>
            <input
              {...register(input.name, { required: true })}
              type={input.type}
              name={input.name}
              value={input.value}
              id={input.id}
            />
            <label htmlFor={input.value}>{input.value}</label>
          </div>
        ))}
      </div>
      {errors.gender && (
        <ErrorMessage
          error={errors.gender.type == "required" && "This field is required"}
        />
      )}
      <Button onclick={handleSubmit(onSubmit)} text="Create account" />
    </>
  );
};

export default Register;
