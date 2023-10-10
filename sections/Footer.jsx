import React from "react";
import {AiOutlineInstagram, AiFillFacebook, AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="w-full p-3 mt-3">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
          <div className="flex items-center gap-3">
            <p className="text-lg text-center lg:text-start">
              SRL CLINIC <span>|</span> Copyright &copy; SRL Clinic. All Rights
              Resevered
            </p>
          </div>

          <div className="flex items-center gap-3">
            <AiOutlineInstagram size={30} className="cursor-pointer hover:text-background duration-200" />
            <AiFillFacebook size={30} className="cursor-pointer hover:text-background duration-200" />
            <AiFillYoutube size={30} className="cursor-pointer hover:text-background duration-200" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
