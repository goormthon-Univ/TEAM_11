import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/views/MainPage/Main";
import Choicecloud from "./components/views/SetcloudPage/Choicecloud";
import Specialcloud from "./components/views/SetcloudPage/Specialcloud";
import Login from "./components/views/LoginPage/Login";
import Designcloud from "./components/views/SetcloudPage/Designcloud";
import Grateful from "./components/posts/grateful/Grateful";
import Common from "./components/posts/common/Common";
import Apologetic from "./components/posts/apologetic/Apologetic";
import Supportive from "./components/posts/supportive/Supportive";
import Boom from "./components/posts/boom/Boom";
import CloudDetail from "./components/views/CloudPage/CloudDetail";
import Footer from "./components/common/footer/Footer";
import TeamAbout from "./components/views/AboutPage/TeamAbout";
import ServiceAbout from "./components/views/AboutPage/ServiceAbout";
import "./App.css";
import styled from "styled-components";
import Clouds from "./components/views/MainPage/Clouds";
import Signup from "./components/views/LoginPage/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalWrapper>
          <Routes>
            <Route exact path="/main/:userId" element={<Main />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/choicecloud" element={<Choicecloud />} />
            <Route exact path="/specialcloud" element={<Specialcloud />} />
            <Route exact path="/designcloud" element={<Designcloud />} />
            <Route exact path="/grateful" element={<Grateful />} />
            <Route exact path="/common" element={<Common />} />
            <Route exact path="/apologetic" element={<Apologetic />} />
            <Route exact path="/supportive" element={<Supportive />} />
            <Route exact path="/boom" element={<Boom />} />
            <Route exact path="/teamabout" element={<TeamAbout />} />
            <Route exact path="/serviceabout" element={<ServiceAbout />} />
            <Route exact path="/clouds" element={<Clouds />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route
              exact
              path="/cloud/:cloudType/:cloudIdx"
              element={<CloudDetail />}
            />
          </Routes>
        </GlobalWrapper>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
const GlobalWrapper = styled.div`
  // background-image: url("/public/img/main/background.png");
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 390px !important;
  }
`;
export default App;
