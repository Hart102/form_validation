const Button = ({ disabled, onclick, text }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="px-3 py-2 my-6 rounded text-white bg-blue-600 drop-shadow-lg"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
