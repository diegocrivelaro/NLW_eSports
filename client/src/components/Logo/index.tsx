// Assets
import logo from "../../../public/assets/logos/logo.svg";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div>
      <img
        src={logo}
        alt="eSports <NLW/>"
        title="eSports <NLW/>"
        className={className}
      />
    </div>
  );
}
