import React from "react";
import "./subscribe.scss";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faDna } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Subscribe = () => {
  return (
    <section className="subscribe py-12 px-4 pb-16">
      <div className="container mx-auto  ">
        <h2 className="mb-8">Subscribe With Us Now !</h2>
        <div className="gap-3 xl:gap-6 grid md:grid-cols-2 xl:grid-cols-3">
          <div className="plan bg-white  rounded-xl">
            <FontAwesomeIcon icon={faDna} className="dna" />
            <div className="head p-6">
              <h3 className="uppercase">Sec 1</h3>
              <p>100E.P / Month</p>
            </div>
            <div className="body p-6">
              <ul>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Access to resources
                </li>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Stay up-to-date
                </li>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Save time
                </li>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Personalize instructions
                </li>
              </ul>
            </div>
            <div className="foot p-4 flex items-center justify-end ">
              <button className=" font-bold flex items-center gap-3">
                Subscribe Now
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="plan  bg-white">
            <FontAwesomeIcon icon={faDna} className="dna" />

            <div className="head p-6">
              <h3 className="uppercase">Sec 2</h3>
              <p>100E.P / Month</p>
            </div>
            <div className="body p-6">
              <ul>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Access to resources
                </li>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Stay up-to-date
                </li>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Save time
                </li>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Personalize instructions
                </li>
              </ul>
            </div>
            <div className="foot p-4 flex items-center justify-end">
              <button className=" font-bold flex items-center gap-3">
                Subscribe Now
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="plan  bg-white  rounded-xl">
            <FontAwesomeIcon icon={faDna} className="dna" />
            <div className="head p-6">
              <h3 className="uppercase">Sec 3</h3>
              <p>100E.P / Month</p>
            </div>
            <div className="body p-6">
              <ul>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Access to resources
                </li>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Stay up-to-date
                </li>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Save time
                </li>
                <li className="py-[15px] font-semibold flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[24px]"
                  />
                  Personalize instructions
                </li>
              </ul>
            </div>
            <div className="foot p-4 flex items-center justify-end">
              <button className=" font-bold flex items-center gap-3">
                Subscribe Now
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
