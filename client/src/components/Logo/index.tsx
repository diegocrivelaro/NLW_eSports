// Lib
import cn from "classnames";

// Assets
import logo from "../../../public/assets/logos/logo.svg";

interface LogoProps {
  className?: string;
  animation?: boolean;
}

export default function Logo({ className, animation }: LogoProps) {
  return (
    <div
      className={cn({
        "hover:scale-125 hover:-translate-y-2 transition ease-in-out duration-500":
          animation,
      })}
    >
      <img
        src={logo}
        alt="eSports <NLW/>"
        title="eSports <NLW/>"
        className={className}
      />
    </div>
  );
}
