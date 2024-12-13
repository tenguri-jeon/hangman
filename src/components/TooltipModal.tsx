import { FaWindowClose } from "react-icons/fa";
import { TooltipModalCon } from "./styled";

interface OwnProps {
  handleMouseLeave: () => void;
}

const TooltipModal: React.FC<OwnProps> = ({ handleMouseLeave }) => {
  return (
    <TooltipModalCon>
      모든 알파벳을 맞췄을 경우 정답체크 버튼 혹은 아무키를 입력하면 다음 문제로 넘어가세요
      <FaWindowClose onClick={handleMouseLeave}/> 
    </TooltipModalCon>
  );
};

export default TooltipModal;
