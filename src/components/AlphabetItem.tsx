import { splitWordType } from "../module/type";
import { AlphabetsItemCom } from "./styled"

interface OwnProps {
    alphabets : splitWordType;
}

const AlphabetItem:React.FC<OwnProps> = ({alphabets}) => {
  return (
    <AlphabetsItemCom className={
        alphabets.isChk === null ? '' : alphabets.isChk? 'on' : 'off' 
    }>
      {alphabets.spelling}
    </AlphabetsItemCom>
  )
}

export default AlphabetItem
