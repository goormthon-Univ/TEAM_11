import React from "react";
import { useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // OAuth2 로그인을 위한 API 경로
            const oauthApiPath = '/';

            // 로그인 요청을 보내기 위한 데이터 (예시)
            const requestData = {
                // 추가 필요한 데이터가 있다면 여기에 추가
            };

            // axios를 사용하여 백엔드로 POST 요청 보내기
            const response = await axios.post(oauthApiPath, requestData);

            // 백엔드로부터의 응답 확인
            console.log('로그인 응답:', response.data);

            // 로그인이 성공했다면 추가적인 로직을 수행할 수 있습니다.
            // 예: 토큰 저장, 사용자 정보 업데이트 등
        } catch (error) {
            // 로그인에 실패한 경우 에러 처리
            console.error('로그인 에러:', error.response || error.message);
        }
    }

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
            <div className="loginbtn" onClick={handleLogin}>
                <img src="/img/login/loginbtn.png" alt="카카오톡로그인" />
            </div>
        </div>
    );
}
