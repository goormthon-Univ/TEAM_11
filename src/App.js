import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/views/MainPage/Main";
import Choicecloud from "./components/views/SetcloudPage/Choicecloud";
import Specialcloud from "./components/views/SetcloudPage/Specialcloud";
import Login from "./components/views/LoginPage/Login";
import Grateful from "./components/posts/grateful/Grateful";
import Apologetic from "./components/posts/apologetic/Apologetic";
import Boom from "./components/posts/boom/Boom";
import CloudDetail from "./components/views/Cloud/CloudDetail";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalWrapper>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/choicecloud" element={<Choicecloud />} />
            <Route exact path="/specialcloud" element={<Specialcloud />} />
            <Route exact path="/grateful" element={<Grateful />} />
            <Route exact path="/apologetic" element={<Apologetic />} />
            <Route exact path="/boom" element={<Boom />} />
            <Route exact path="/cloud/:id" element={<CloudDetail />} />
          </Routes>
        </GlobalWrapper>
      </BrowserRouter>
    </div>
  );
}
const GlobalWrapper = styled.div`
  // background-image: url("/public/img/main/background.png");
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 375px !important;
  }
`;
export default App;
