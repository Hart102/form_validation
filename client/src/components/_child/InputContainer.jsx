export const ErrorMessage = ({ error }) => {
  return <p className="text-red-500 mb-2">{error}</p>;
};

const InputContainer = ({ lable, children }) => {
  return (
    <div className="flex flex-col gap-2 mb-5 capitalize">
      <label htmlFor="name" className="text-neutral-400">
        {lable}
      </label>
      {children}
    </div>
  );
};

export default InputContainer;
