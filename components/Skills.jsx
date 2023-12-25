import { PiDevToLogoFill } from "react-icons/pi";
import { FaServer } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

export default function Skills() {
  return (
    <div className="p-8">
      <h1 className="text-6xl text-center">What Do I Offer</h1>

      <div className="m-40 flex justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <PiDevToLogoFill className="text-7xl" />
          <h2 className="py-5 w-52 text-center text-3xl font-bold">Full Stack Development</h2>
          <div className="w-[22rem]">
            <p>
              I build high performing and robust application with MERN stack.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <FaServer className="text-7xl" />
          <h2 className="text-3xl font-bold">DevOps</h2>
          <p className="w-[22rem]">I build high performing and robust application with mern stack.</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <MdOutlineSecurity className="text-7xl" />
          <h2 className="w-52 text-center text-3xl font-bold">Penetration Testesting</h2>
          <p className="w-[22rem]">I build high performing and robust application with mern stack.</p>
        </div>
      </div>
    </div>
  );
}
