import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";
import Clouds from "./Clouds";
import Nav from "./Nav";

export default function Main() {
  const [hasLetter, setHasLetter] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedInUserId = localStorage.getItem("userId");
    console.log(loggedInUserId);
    if (loggedInUserId) {
      setLoggedIn(true);
      setUserId(loggedInUserId);
      setIsOwner(true); // 가정: 현재 로그인한 사용자가 페이지의 소유자라고 가정
      fetchUserData(loggedInUserId);
    } else {
      // 로그인 페이지로 리다이렉트
      window.location.href = "/";
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(
        `https://43.202.49.87:8080/clouds/${userId}`
      );
      console.log(response.data);
      setUserData(response.data);
      setHasLetter(response.data && response.data.length > 0);
    } catch (error) {
      console.error("사용자 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleButtonClick = () => {
    // 현재 URL 복사
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("링크가 복사되었습니다: " + currentUrl);
    });
  };

  return (
    <div className="body-container">
      <div className="top-container">
        <div className="status">{userId}님의 하늘</div>
        <div className="message-count">
          {hasLetter ? "구름이 도착했어요!" : "구름이 없어요"}
        </div>
      </div>
      <div className="drop-down">
        <img
          src="/img/main/drop_down.png"
          alt="드롭다운버튼"
          onClick={toggleDropdown}
        />
        {dropdownOpen && <Nav />}
      </div>
      <div className="middle-container">
        {hasLetter ? (
          <Clouds data={userData} />
        ) : (
          <div className="noclouds">
            <img src="/img/main/cryingcloud.png" alt="No Clouds"></img>
            <div className="noclouds-message">아직 구름이 없어요ㅠ.ㅠ</div>
          </div>
        )}
        {isLoggedIn && isOwner ? (
          <button className="copylink_btn" onClick={handleButtonClick}>
            하늘 링크 복사하기
          </button>
        ) : (
          <div className="notAuthorized">
            <button className="movetologin">하늘 채워주기</button>
            <button className="post-cloud">나도 하늘 만들기</button>
          </div>
        )}
      </div>
    </div>
  );
}
