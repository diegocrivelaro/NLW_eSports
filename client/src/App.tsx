// Components
import Logo from "./components/Logo";
import Title from "./components/Title";

// Styles
import "./styles/main.css";

export default function App() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center">
      <Logo className="select-none" />

      <div>
        <Title className="text-6xl text-white font-bold mt-20">
          Seu{" "}
          <span className="bg-titleGradient bg-clip-text text-transparent">
            duo
          </span>{" "}
          está aqui!
        </Title>
      </div>
    </section>
  );
}
