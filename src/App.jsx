import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./cmps/Benefits";
import Collaboration from "./cmps/Collaboration";
import Header from "./cmps/Header";
import Hero from "./cmps/Hero";
import Pricing from "./cmps/Pricing";
import Services from "./cmps/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
