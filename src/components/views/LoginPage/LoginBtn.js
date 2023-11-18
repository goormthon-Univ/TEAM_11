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
        {
          userId: loginInfo.userId,
          password: loginInfo.password,
        }
      );
      console.log(response);
      alert("로그인 성공");
      // 여기에 로그인 성공 후 로직 추가 (예: 메인 페이지로 리디렉션)
    } catch (error) {
      console.error(error);
      alert("로그인 실패");
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
        type="password" // 비밀번호는 type을 "password"로 설정하여 보안 유지
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
