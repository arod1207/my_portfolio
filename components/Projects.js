import {
  GitHubSVG,
  JavaScriptSVG,
  LinkSVG,
  ReactSVG,
  ReduxSVG,
  TailWindSVG,
} from "../Utils/SVGs";

function Projects() {
  return (
    <div className="my-8 mx-3 h-screen">
      <div className="my-2 text-center">
        <h1 className="text-2xl font-bold md:text-6xl">Projects</h1>
      </div>
      <div className="border-1 flex w-full flex-col rounded-md border border-[#D77A61]  md:flex-row">
        <div className="h-[300px] w-full">
          <img
            className="h-full rounded-t-md object-cover md:object-contain"
            src="/purotacos.png"
            alt=""
          />
        </div>
        <div className="m-3">
          <div>
            <p className="text-md md:text-xl">
              Welcome to Puro Tacos, your one-stop shop for all things taco! Our
              e-commerce site is dedicated to bringing the deliciousness of
              tacos right to your doorstep.
            </p>
          </div>
          <div className="my-4 flex justify-between md:justify-start md:gap-4">
            <div className="h-[50px] w-[50px] rounded-full">
              <JavaScriptSVG />
            </div>
            <div className="h-[50px] w-[50px] rounded-full">
              <TailWindSVG />
            </div>
            <div className="h-[50px] w-[50px] rounded-full">
              <ReactSVG />
            </div>
            <div className="h-[50px] w-[50px] rounded-full">
              <ReduxSVG />
            </div>
          </div>
          <div className="my-4 flex flex-col gap-8">
            <span className="flex gap-3">
              <LinkSVG />{" "}
              <a className="font-bold" href="https://purotacos.netlify.app/">
                {" "}
                Puro Tacos{" "}
              </a>
            </span>
            <span className="flex gap-3">
              <GitHubSVG />{" "}
              <a
                className="font-bold"
                href="https://github.com/arod1207/puro_tacos_frontend"
              >
                GitHub
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
