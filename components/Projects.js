import {
  GitHubSVG,
  JavaScriptSVG,
  LinkSVG,
  ReactSVG,
  ReduxSVG,
  TailWindSVG,
} from "../Utils/SVGs";

function Projects({ projectRef }) {
  return (
    <div className="my-8 mx-3 h-screen" ref={projectRef}>
      <div className="my-2 text-center">
        <h1 className="text-2xl font-bold md:text-6xl">Projects</h1>
      </div>
      <div className="my-4 flex w-full flex-col rounded-md border-2   border-[#D77A61] md:flex-row">
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
            <div className="h-[50px] w-[50px]">
              <JavaScriptSVG />
            </div>
            <div className="h-[50px] w-[50px]">
              <TailWindSVG />
            </div>
            <div className="h-[50px] w-[50px]">
              <ReactSVG />
            </div>
            <div className="h-[50px] w-[50px]">
              <ReduxSVG />
            </div>
          </div>
          <div className="my-4 flex flex-col gap-8">
            <div className="flex gap-3">
              <LinkSVG />
              <a className="font-bold" href="https://purotacos.netlify.app/">
                Puro Tacos
              </a>
            </div>
            <div className="flex gap-3">
              <GitHubSVG />
              <a
                className="font-bold"
                href="https://github.com/arod1207/puro_tacos_frontend"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex w-full flex-col rounded-md border-2 border-[#D77A61]  md:flex-row">
        <div className="h-[300px] w-full">
          <img
            className="h-full rounded-t-md object-cover md:object-contain"
            src="/weather.png"
            alt=""
          />
        </div>
        <div className="m-3 w-full">
          <div>
            <p className="text-md  md:text-xl">
              WeatherFi is your one-stop, no-nonsense site for instant weather
              alerts in your area. Always stay one step ahead with WeatherFi.
            </p>
          </div>
          <div className="my-4 flex justify-between md:justify-start md:gap-4">
            <div className="h-[50px] w-[50px]">
              <JavaScriptSVG />
            </div>
            <div className="h-[50px] w-[50px]">
              <TailWindSVG />
            </div>
            <div className="h-[50px] w-[50px]">
              <ReactSVG />
            </div>
          </div>
          <div className="my-4 flex flex-col gap-8">
            <div className="flex gap-3">
              <LinkSVG />
              <a
                className="font-bold"
                href="https://react-weatherfi.netlify.app/"
              >
                WeatherFi App
              </a>
            </div>
            <div className="flex gap-3">
              <GitHubSVG />
              <a
                className="font-bold"
                href="https://github.com/arod1207/react-weather-app"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
