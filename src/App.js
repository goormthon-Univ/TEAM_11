import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/views/MainPage/Main";
import Choicecloud from "./components/views/SetcloudPage/Choicecloud";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/choicecloud" element={<Choicecloud />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
