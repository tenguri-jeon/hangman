import { useNavigate } from "react-router-dom"

interface OwnProps {
    item : string
}
const Btn:React.FC<OwnProps>= ({item}) => {
  const navigate = useNavigate()
  const onGo = () =>{
    navigate(`/game/${item}`)
  }
  return (
    <button onClick={onGo}>
      {item}
    </button>
  )
}

export default Btn
