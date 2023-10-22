import { type } from "os";
import { HiArrowNarrowRight } from "react-icons/hi";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
};

const Button = ({ handleClick, title }: ButtonProps) => {
  return (
    <button
      className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
      onClick={handleClick}
    >
      {title}
      <span className="group-hover:rotate-90 duration-300">
        <HiArrowNarrowRight className="ml-3" />
      </span>
    </button>
  );
};

export default Button;
