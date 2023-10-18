const Title = ({ title, onclick, text }) => {
  return (
    <div className="mb-8">
      <p className="font-bold text-3xl capitalize text-neutral-600 drop-shadow-lg">
        {title}
      </p>
      <p onClick={onclick} className="cursor-pointer text-neutral-600">
        {text}
      </p>
    </div>
  );
};

export default Title;
