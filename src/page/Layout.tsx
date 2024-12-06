// App.tsx
import Btn from '../components/Btn';
import Main from '../page/Main';

const Layout: React.FC = () => {
  const level: string[] = ['easy', 'hard'];

  return (
    <>
      <h1>HANG MAN GAME</h1>
      <span>난이도</span>
      {level.map((item, idx) => (
        <Btn key={idx} item={item} />
      ))}
    </>
  );
};

export default Layout;

