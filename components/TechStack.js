//SVGs//
import {
  ReactSVG,
  NodeSVG,
  JavaScriptSVG,
  HtmlSVG,
  TailWindSVG,
} from "../Utils/SVGs";

function TechStack() {
  return (
    <div className=" h-full bg-[#DBD3D8] p-4">
      <h2 className="text-center text-xl font-bold md:text-3xl">
        Proficient In
      </h2>

      <div className=" flex justify-between">
        <div className="h-[50px] w-[50px]  md:h-[150px] md:w-[150px]">
          <ReactSVG />
        </div>
        <div className="h-[50px] w-[50px]  md:h-[150px] md:w-[150px]">
          <JavaScriptSVG />
        </div>
        <div className="h-[50px] w-[50px]  md:h-[150px] md:w-[150px]">
          <HtmlSVG />
        </div>
        <div className="h-[50px] w-[50px]  md:h-[150px] md:w-[150px] ">
          <TailWindSVG />
        </div>
        <div className="h-[50px] w-[50px]  md:h-[150px] md:w-[150px]">
          <NodeSVG />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
