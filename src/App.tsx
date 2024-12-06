import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import Main from "./page/Main";

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout/>} />
      <Route path="/game" >
        <Route path="easy" element={<Main/>}/>
        <Route path="hard" element={<Main/>}/>
      </Route>
    </Routes>
  );
};

export default App;
