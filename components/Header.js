import { useState } from "react";

import { motion } from "framer-motion";

//SVGS//
import { HamburgerSVG, CodeBracketSVG } from "../Utils/SVGs";

function Header({ projectRef }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* //DESKTOP// */}
      <div className="relative hidden items-center justify-center bg-[#223843] md:z-10 md:flex md:h-20 md:w-full">
        <span className="absolute left-3 w-12 text-[#EFF1F3]">
          <CodeBracketSVG />
        </span>
        <ul className="flex gap-12 text-xl text-[#EFF1F3]">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={() => handleScroll(projectRef.current)}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <a href="mailto:arod1207@me.com">Contact</a>
          </motion.li>
        </ul>
      </div>

      {/* //MOBILE// */}
      <div className="w-full bg-[#223843] md:hidden">
        <div className="relative flex h-14 items-center justify-end">
          <span className="absolute left-3 w-12 text-[#EFF1F3]">
            <CodeBracketSVG />
          </span>
          <button
            className="flex w-12 cursor-pointer text-[#EFF1F3]"
            onClick={handleShowModal}
          >
            <HamburgerSVG />
          </button>
        </div>
        {showModal && (
          <div className="t flex justify-center">
            <ul className="flex flex-col items-center gap-8 p-4 text-4xl text-[#EFF1F3]">
              <li
                className="cursor-pointer"
                onClick={() => handleScroll(projectRef.current)}
              >
                Projects
              </li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
