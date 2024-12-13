import React from 'react';
import { Routes, Route } from "react-router-dom";  // Router는 제거
import Layout from "./page/Layout";
import Main from "./page/Main";

const App: React.FC = () => {
  return (
    <Routes>  
      <Route path="/" element={<Layout />} />
      <Route path="/game">
        <Route path="easy" element={<Main />} />
        <Route path="hard" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default App;
