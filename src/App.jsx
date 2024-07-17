import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./cmps/Benefits";
import Header from "./cmps/Header";
import Hero from "./cmps/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
