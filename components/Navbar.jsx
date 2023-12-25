import Link from "next/link";
import { BsToggleOn } from "react-icons/bs";
import { useThemeContext } from "@/context/store";

export default function Navbar() {
  const { theme, handleThemeSwitch } = useThemeContext();

  return (
    <div className="w-full h-20 border-b px-32 flex justify-between items-center ">
      <h1 className="text-3xl flex-none">Rajkaran M.</h1>
      <div className="flex flex-1 justify-evenly">
        <Link href="#">Skills</Link>
        <Link href="#">Career</Link>
        <Link href="#">Project</Link>
        <Link href="https://medium.com/@imrajkaran">Article</Link>
        <Link href="#">Newsletter</Link>
      </div>
      <button onClick={() => handleThemeSwitch()}>
        {theme === "dark" ? (
          <BsToggleOn title="Light mode" size={30} />
        ) : (
          <BsToggleOn
            title="Dark mode"
            size={30}
            className="text-[color:var(--primary-color)] rotate-180"
          />
        )}
      </button>
    </div>
  );
}
