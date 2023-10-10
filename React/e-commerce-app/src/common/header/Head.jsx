import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Head = () => {
  return (
    <>
      <section className="bg-mainDark  w-[100%] py-3 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="row">
            <FontAwesomeIcon icon={faPhone} className="text-sm" />
            <label className="text-[13px] ms-2 tracking-wide ">
              +88012 3457 7894
            </label>
            <FontAwesomeIcon icon={faEnvelope} className="text-sm ms-2" />
            <label className="text-[13px] ms-2 tracking-wide ">
              example@gmail.com
            </label>
          </div>
          <div className="row">
            <ul className="list-none  flex justify-between gap-5 text-[13px] items-center ">
              <li className="cursor-pointer ">Theme FAQ's</li>
              <li className="cursor-pointer ">Need Helps</li>
              <li className="cursor-pointer ">EN</li>
              <li className="cursor-pointer ">USD</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
