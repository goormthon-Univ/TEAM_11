import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/views/MainPage/Main";
import Grateful from "./components/posts/grateful/Grateful";
import Apologetic from "./components/posts/apologetic/Apologetic";
import Boom from "./components/posts/boom/Boom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/grateful" element={<Grateful />} />
          <Route exact path="/apologetic" element={<Apologetic />} />
          <Route exact path="/boom" element={<Boom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
