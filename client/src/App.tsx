// Components
import Logo from "./components/Logo";
import Title from "./components/Title";
import PostAds from "./components/Modal/PostAds";

// Styles
import "./styles/main.css";

export default function App() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center">
      <Logo className="select-none" animation />

      <section>
        <Title className="mt-20 text-6xl font-black text-center text-white">
          Seu{" "}
          <span className="bg-titleGradient bg-clip-text text-transparent">
            duo
          </span>{" "}
          está aqui!
        </Title>
      </section>

      <PostAds />
    </section>
  );
}
