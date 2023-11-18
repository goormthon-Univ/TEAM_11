import React from 'react'
import { useEffect } from 'react';
import './Login.css'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';


export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOAuthKakao = async () => {
        try {
            window.location.href = 'https://43.202.49.87:8080/oauth/kakao'
            // 카카오로부터 받아온 code를 서버에 전달하여 카카오로 회원가입 & 로그인한다
            const response = await axios.get(`https://43.202.49.87:8080/oauth/kakao`);
            const data = response.data; // 응답 데이터
            // alert("로그인 성공: " + data);
            // navigate("/");
        } catch (error) {
            console.log("로그인 에러:", error);
        }
    };

    /*     useEffect(() => {
            handleOAuthKakao();
        }, []); // 코드를 한 번만 처리하도록 빈 의존성 배열을 전달합니다. */

    return (
        <div className='login-container'>
            <div className='sentbycloud'><img src='/img/login/sentbycloud.png' alt="제목" /></div>
            <div className='lettercloud'><img src='/img/login/lettercloud.png' alt="편지구름" /></div>
            <div className='memory-text'><img src='/img/login/memory_text.png' alt="추억텍스트" /></div>
            <div className='loginbtn' onClick={handleOAuthKakao}><img src='/img/login/loginbtn.png' alt="카카오톡로그인" /></div>
        </div>
    )
}
