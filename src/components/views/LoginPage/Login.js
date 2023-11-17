import React from 'react'
import './Login.css'
import axios from "axios";

export default function Login() {
    const handleLogin = async () => {
        try {
            // OAuth2 로그인을 위한 API 경로
            const oauthApiPath = 'https://43.202.49.87:8080/users/oauth2/kakao';

            // axios를 사용하여 백엔드로 POST 요청 보내기
            const response = await axios.post(oauthApiPath);

            // 백엔드로부터의 응답 확인
            console.log('로그인 응답:', response.data);

            // 추가적인 로직수행..할거있으면 추가하기
        } catch (error) {
            // 로그인에 실패한 경우 에러 처리
            console.error('로그인 에러:', error.response || error.message);
        }
    };
    return (
        <div className='login-container'>
            <div className='sentbycloud'><img src='/img/login/sentbycloud.png' alt="제목" /></div>
            <div className='lettercloud'><img src='/img/login/lettercloud.png' alt="편지구름" /></div>
            <div className='memory-text'><img src='/img/login/memory_text.png' alt="추억텍스트" /></div>
            <div className='loginbtn' onClick={handleLogin}><img src='/img/login/loginbtn.png' alt="카카오톡로그인" /></div>
        </div>
    )
}
