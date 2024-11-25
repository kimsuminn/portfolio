import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="w-screen h-[120px] p-4">
      <div className="max-w-[1400px] h-[100%] m-auto p-4 bg-white opacity-80 flex justify-between items-center rounded-lg">
        <Link to="/"><h1 className="font-moneyGraphy text-[2rem] font-extrabold text-[#444]">kimsuminn's Portfolio</h1></Link>
        <ul className="flex gap-8">
          <li><Link to="/" className="font-moneyGraphy text-[1.2rem] text-[#777] hover:opacity-80 transition-[.5s]">ABOUT ME</Link></li>
          <li><Link to="/" className="font-moneyGraphy text-[1.2rem] text-[#777] hover:opacity-80 transition-[.5s]">ARCHIVING</Link></li>
          <li><Link to="/" className="font-moneyGraphy text-[1.2rem] text-[#777] hover:opacity-80 transition-[.5s]">PROJECT</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;