import React from "react";
import { useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import LoginBtn from "./LoginBtn";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="sentbycloud">
        <img src="/img/login/sentbycloud.png" alt="제목" />
      </div>
      <div className="lettercloud">
        <img src="/img/login/lettercloud.png" alt="편지구름" />
      </div>
      <div className="memory-text">
        <img src="/img/login/memory_text.png" alt="추억텍스트" />
      </div>
      <div className="loginbtn">
        <LoginBtn />
      </div>
    </div>
  );
}
