import React from "react";
import { BsCartFill } from "react-icons/bs";

function Header() {
    return (
        <header className="w-full h-full p-5 text-2xl text-red-500 font-semibold text-end flex justify-between bg-[#593D88] ">
            <div className="h-full ">header</div>
            <div className="h-full">
                <BsCartFill />
            </div>
        </header>
    );
}

export default Header;
