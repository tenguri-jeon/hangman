import { useEffect, useState } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import TooltipModal from "./TooltipModal";

const Tooltip = () => {
  const [ontooltip, setTooltip] = useState<boolean>(true);

  const handleMouseEnter = () => {
    setTooltip(true);
  };

  const handleMouseLeave = () => {
    setTooltip(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleMouseLeave();
    }, 5000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div>
      <RxQuestionMarkCircled
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      />
      {ontooltip && <TooltipModal handleMouseLeave={handleMouseLeave} />}  {/* 모달이 표시될 때만 */}
    </div>
  );
};

export default Tooltip;
