import React, { useState } from "react";
import axios from "axios";
import * as L from "./LoginBtnStyle";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://43.202.49.87:8080/user/login",
        loginInfo
      );
      console.log(response);
      if (response.data.message === "로그인이 정상적으로 완료되었습니다.") {
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = `/main/${response.data.userId}`;
      } else {
        alert("로그인 실패: " + response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("로그인 실패: 서버 에러");
    }
  };

  return (
    <L.LoginWrapper onSubmit={handleSubmit}>
      <L.ID
        type="text"
        name="userId"
        placeholder="ID"
        onChange={handleChange}
      />
      <L.PW
        type="password"
        name="password"
        placeholder="PW"
        onChange={handleChange}
      />
      <L.Submit onClick={handleSubmit}>로그인</L.Submit>
      <L.Info>아직 회원이 아니신가요?</L.Info>
      <L.Signup href="/signup">회원가입</L.Signup>
    </L.LoginWrapper>
  );
}
