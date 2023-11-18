import React, { useState } from "react";
import axios from "axios";
import * as S from "./SignupStyle";

export default function Signup() {
  const [formData, setFormData] = useState({
    userId: "",
    nickname: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const response = await axios.post(
        "https://43.202.49.87:8080/user/signup",
        {
          userId: formData.userId,
          nickname: formData.nickname,
          password: formData.password,
        }
      );
      console.log(response);
      alert("회원가입 성공");
    } catch (error) {
      console.error(error);
      alert("회원가입 실패");
    }
  };

  return (
    <>
      <S.SignupContainer>
        <S.Prev />
        <S.Title>회원가입</S.Title>
        <S.SignupWrapper onSubmit={handleSubmit}>
          <S.SubT>아이디</S.SubT>
          <S.Input
            type="text"
            name="userId"
            placeholder="아이디"
            onChange={handleChange}
          />
          <S.SubT>닉네임</S.SubT>
          <S.Input
            type="text"
            name="nickname"
            placeholder="닉네임"
            onChange={handleChange}
          />
          <S.SubT>비밀번호</S.SubT>
          <S.Input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <S.SubT>비밀번호 확인</S.SubT>
          <S.Input
            type="password"
            name="password2"
            placeholder="비밀번호 재확인"
            onChange={handleChange}
          />
          <S.Submit onClick={handleSubmit}>회원가입하기</S.Submit>
        </S.SignupWrapper>
      </S.SignupContainer>
    </>
  );
}
