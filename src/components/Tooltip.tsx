import { useEffect, useState } from "react";
import { TooltipCon } from "./styled";
import TooltipModal from "./TooltipModal";
import { RxQuestionMarkCircled } from "react-icons/rx";

interface TooltipProps {
    inputRef: React.RefObject<HTMLInputElement>;
}

const Tooltip = ({inputRef}:TooltipProps) => {
  const [ontooltip, setTooltip] = useState<boolean>(true);

  const handleMouseEnter = () => {
    setTooltip(true);
  };

  const handleMouseLeave = () => {
    setTooltip(false);
    inputRef.current?.focus();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleMouseLeave();
    }, 5000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <TooltipCon>
      <RxQuestionMarkCircled
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        color="#4ab8ff"
      />
      {ontooltip && <TooltipModal handleMouseLeave={handleMouseLeave} />}  {/* 모달이 표시될 때만 */}
    </TooltipCon>
  );
};

export default Tooltip;
