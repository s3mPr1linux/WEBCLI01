import { BsTerminal } from "react-icons/bs";
import { MdMinimize, MdClose } from "react-icons/md";
import { VscChromeMaximize } from "react-icons/vsc";

const TerminalTitle = () => {
  return (
    <div
      className="bg-black/[.5] rounded-tl-xl rounded-tr-xl 
        text-kali-gray font-segoe font-semibold flex items-center 
        justify-between py-2.5 px-4 border-b border-solid border-black/[.1]
        select-none shadow-md"
    >
      <div className="text-base mr-8">
        <BsTerminal />
      </div>

      <div>root@kali: ~</div>

      <div className="text-sm flex items-center justify-center gap-3">
        <span className="cursor-pointer hover:text-white">
          <MdMinimize />
        </span>
        <span className="cursor-pointer hover:text-white">
          <VscChromeMaximize />
        </span>
        <span className="cursor-pointer hover:text-white">
          <MdClose />
        </span>
      </div>
    </div>
  );
};

export default TerminalTitle;
