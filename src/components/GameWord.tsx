import { splitWordType } from "../module/type"

// rafce
interface OwnProps {
  word : splitWordType
}

const GameWord:React.FC<OwnProps> = ({word}) => {

  return (
    <li style={{listStyle : 'none'}}>
      {word.isChk ? word.spelling : '_'}
    </li>
  )
}

export default GameWord
