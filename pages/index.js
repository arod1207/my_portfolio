//COMPONENTS//
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <div className="mx-auto 2xl:container">
      <Header />
      <Hero />
      <Projects />
      <TechStack />
    </div>
  );
}
