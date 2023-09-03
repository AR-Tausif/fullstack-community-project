import { NavLink } from "react-router-dom";
import { LiaUserClockSolid } from 'react-icons/lia'
import { BsPeopleFill } from 'react-icons/bs'
import { BiLogoGoogle, BiMenuAltLeft } from 'react-icons/bi'
const Navbar = () => {
    return (
        <nav className="bg-transparent fixed z-10 w-full px-7">
            <div className="flex justify-between">

                <ul className="flex gap-10 items-center text-[#ececec] text-md">
                    <li><BiMenuAltLeft /></li>
                    <li className="text-gray-100"><BiLogoGoogle /></li>
                    <li><NavLink className="text-white font-bold">Home</NavLink></li>
                    <li><NavLink>Courses </NavLink></li>
                    <li><NavLink>Paths </NavLink></li>
                    <li><NavLink>Pricing </NavLink></li>
                    <li><NavLink>Teachers </NavLink></li>
                    <li><NavLink> <BsPeopleFill /> </NavLink></li>
                </ul>

                <div className="flex items-center gap-6">
                    <LiaUserClockSolid className="text-2xl text-gray-200 font-bold" size={"29px"} />
                    <button className="border text-gray-100 py-3 px-6 rounded-lg">GET STARTED</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;