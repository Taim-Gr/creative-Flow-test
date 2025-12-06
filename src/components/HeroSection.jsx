import abstractImage from "../assets/abstract.png";
import "./HeroSection.css";
export default function HeroSection() {
  return (
    <div className="max-w-screen-2xl mx-auto flex justify-center px-8 bg-secondary font-[montserrat]">
      <div className="flex flex-row lg:h-screen py-10 justify-between items-center gap-x-20 max-lg:flex-col gap-y-10 ">
        {/* Text + CTA */}
        <div className="text flex-1 max-lg:text-center">
          <h1 className="text-5xl font-bold ">
            UNLOCK YOUR
            <span className="block text-[#522fcf] font-[montserratBlack] my-2 max-lg:inline">
              {" "}
              CREATIVE
            </span>
            <span className="block text-primary font-[montserratBlack] ">
              FLOW.
            </span>
          </h1>
          <p className="text-[#707c8c] text-xl my-4">
            Simplify your projects, collaborate effortlessly, and bring ideas to
            life with our intuitive platform
          </p>
          <div className="btns flex gap-4  max-lg:justify-center mt-6">
            <button className="font-bold bg-primary text-white py-3 px-8 rounded-xl  cursor-pointer transition duration-600 hover:scale-110">
              Get Started
            </button>
            <button className="text-[#5a67f0] border font-bold bg-white border-[#5a67f0] py-3 px-8 rounded-xl cursor-pointer transition duration-600 hover:scale-110 hover:bg-transparent">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 flex bg-white justify-center items-center rounded-3xl py-6 px-2 shadow-lg">
          <img
            src={abstractImage}
            className="h-[600px] w-[400px] rounded-xl animate-float-move drop-shadow-blue-100 drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
