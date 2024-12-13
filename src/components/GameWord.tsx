import { splitWordType } from "../module/type"
import { GameItem } from "./styled"

// rafce
interface OwnProps {
  word : splitWordType
}

const GameWord:React.FC<OwnProps> = ({word}) => {

  return (
    <GameItem style={{listStyle : 'none'}}>
      {word.isChk ? word.spelling : '_'}
    </GameItem>
  )
}

export default GameWord
