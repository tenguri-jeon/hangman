import Btn from '../components/Btn';
import { ButtonCon, LayOutCon } from './styled';

const Layout: React.FC = () => {
  const level: string[] = ['easy', 'hard'];

  return (
    <LayOutCon>
      <h1>HANG MAN GAME</h1>
      <span>난이도를 선택해주세요</span>
      <ButtonCon>
        {level.map((item, idx) => (
            <Btn key={idx} item={item} />
        ))}
      </ButtonCon>
    </LayOutCon>
  );
};

export default Layout;

