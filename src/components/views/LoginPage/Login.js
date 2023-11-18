import React from 'react'
import { useEffect } from 'react';
import './Login.css'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';


export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOAuthKakao = async (code) => {
        try {
            // 카카오로부터 받아온 code를 서버에 전달하여 카카오로 회원가입 & 로그인한다
            const response = await axios.post(`http://localhost:8080/oauth/login/kakao?code=${code}`);
            const data = response.data; // 응답 데이터
            alert("로그인 성공: " + data)
            navigate("/");
        } catch (error) {
            console.log("로그인 에러:", error)
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');  // 카카오는 Redirect 시키면서 code를 쿼리 스트링으로 준다.
        if (code) {
            alert("CODE = " + code)
            handleOAuthKakao(code);
        }
    }, [location]);

    return (
        <div className='login-container'>
            <div className='sentbycloud'><img src='/img/login/sentbycloud.png' alt="제목" /></div>
            <div className='lettercloud'><img src='/img/login/lettercloud.png' alt="편지구름" /></div>
            <div className='memory-text'><img src='/img/login/memory_text.png' alt="추억텍스트" /></div>
            <div className='loginbtn' onClick={handleOAuthKakao}><img src='/img/login/loginbtn.png' alt="카카오톡로그인" /></div>
        </div>
    )
}
