import { useState } from "react";
import { Link } from "react-router-dom";

const Title = ({ title }) => {
  const [isTrue, setIsTrue] = useState(false);

  const switchPages = () => (!isTrue ? setIsTrue(true) : setIsTrue(false));

  return (
    <div className="mb-8">
      <p className="font-bold text-3xl capitalize text-neutral-600 drop-shadow-lg">
        {title}
      </p>
      <Link
        to={"/login"}
        onClick={switchPages}
        className={isTrue ? "flex gap-2" : "hidden"}
      >
        <p className="text-neutral-600">Already have an account ? Login</p>
      </Link>
      <Link
        to={"/"}
        onClick={switchPages}
        className={!isTrue ? "flex gap-2" : "hidden"}
      >
        <p className="text-neutral-600">Dont have an account ? Register</p>
      </Link>
    </div>
  );
};

export default Title;
