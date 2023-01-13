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
    <div className="my-8 mx-3 h-full" ref={projectRef}>
      <div className="my-2 text-center">
        <h1 className="text-2xl font-bold md:text-6xl">Projects</h1>
        {/* // PROJECT 1 // */}
      </div>
      <div className="my-4 flex w-full flex-col rounded-md border-2   border-[#D77A61] md:flex-row">
        <div className="h-[300px] w-full">
          <img
            className="h-full rounded-t-md object-cover md:object-contain"
            src="/purotacos.png"
            alt=""
          />
        </div>
        <div className="m-3 md:w-full">
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
      {/* // PROJECT 2 // */}
      <div className=" my-4 flex w-full flex-col rounded-md border-2 border-[#D77A61]  md:flex-row">
        <div className="h-[300px] w-full">
          <img
            className="h-full rounded-t-md object-cover md:object-contain"
            src="/weather.png"
            alt=""
          />
        </div>
        <div className="m-3 md:w-full">
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
      {/* // PROJECT 3 // */}
      <div className="my-4 flex w-full flex-col rounded-md border-2 border-[#D77A61]  md:flex-row">
        <div className="h-[300px] w-full">
          <img
            className="h-full rounded-t-md object-cover md:object-contain"
            src="/swiper.png"
            alt=""
          />
        </div>
        <div className="m-3 md:w-full">
          <div>
            <p className="text-md  md:text-xl">
              Music player that plays 30 second clips of your favorite songs.
              Swipe Away!
            </p>
          </div>
          <div className="my-4 flex justify-between md:justify-start md:gap-4">
            <div className="h-[50px] w-[50px]">
              <JavaScriptSVG />
            </div>
            <div className="h-[50px] w-[50px]">
              <ReactSVG />
            </div>
          </div>
          <div className="my-4 flex flex-col gap-8">
            <div className="flex gap-3">
              <LinkSVG />
              <a className="font-bold" href="https://swipe-jamz.netlify.app/">
                Swiper Jamz
              </a>
            </div>
            <div className="flex gap-3">
              <GitHubSVG />
              <a
                className="font-bold"
                href="https://github.com/arod1207/swipe_jamz"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* // PROJECT 4 // */}
      <div className="my-4 flex w-full flex-col items-center justify-center rounded-md border-2 border-[#D77A61]  md:flex-row">
        <div className="h-[400px] w-full">
          <img
            className="mx-auto h-full rounded-t-md object-cover md:object-contain"
            src="/travel.png"
            alt=""
          />
        </div>
        <div className="m-3 md:w-full">
          <div>
            <p className="text-md  md:text-xl">
              Find out about hotels, restaurants, and local attractions in a
              city near you. Scan the barcode to access the app using Expo
              (Download the Expo app)
            </p>
          </div>
          <div className="my-4 flex justify-between md:justify-start md:gap-4">
            <div className="h-[50px] w-[50px]">
              <JavaScriptSVG />
            </div>
            <div className="h-[50px] w-[50px]">
              <ReactSVG />
            </div>
          </div>
          <div className="my-4 flex flex-col gap-8">
            <div className="flex gap-3">
              <img
                className="h-[200px] rounded-t-md object-cover md:object-contain"
                src="/travelQR.png"
                alt=""
              />
            </div>
            <div className="flex gap-3">
              <GitHubSVG />
              <a
                className="font-bold"
                href="https://github.com/arod1207/CityDiscoveryApp"
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
