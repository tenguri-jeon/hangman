import { FaWindowClose } from "react-icons/fa";

// handleMouseLeave의 타입은 () => void여야 합니다.
interface OwnProps {
  handleMouseLeave: () => void;
}

const TooltipModal: React.FC<OwnProps> = ({ handleMouseLeave }) => {
  return (
    <div
      style={{
        position: "absolute",
        background: "lightgray",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      모든 알파벳을 맞췄을 경우 정답체크 버튼 혹은 아무키를 입력하면 다음 문제로 넘어가세요
      <FaWindowClose onClick={handleMouseLeave} /> {/* 버튼 클릭 시 모달 닫기 */}
    </div>
  );
};

export default TooltipModal;
