import { useRef } from "react";

//COMPONENTS//
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";

export default function Home() {
  const projectRef = useRef(null);

  return (
    <div className="mx-auto 2xl:container">
      <Header projectRef={projectRef} />
      <Hero />
      <Projects projectRef={projectRef} />
      <TechStack />
    </div>
  );
}
