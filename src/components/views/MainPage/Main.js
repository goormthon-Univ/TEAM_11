import React from "react";
import "./Main.css";
import { useState, useEffect } from "react";
//import axios from 'axios';

export default function Main() {
  const [hasLetter, setHasLetter] = useState(false);

  const updateCloud = async () => {
    try {
      // 백엔드에서 편지 여부 확인
      //const hasLetters = await checkLetters();

      // 편지 여부에 따라 상태 업데이트
      //setHasLetter(hasLetters);
      if (hasLetter) {
        // 편지가 있을 경우
      } else {
        // 편지가 없을 경우
      }
    } catch (error) {
      console.error("편지 여부를 확인하는 동안 오류가 발생했습니다:", error);
    }
  };
  const handleButtonClick = () => {
    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl).then(() => {
      console.log("링크가 복사되었습니다:", currentUrl);

      // Notification API를 이용한 알림
      if (Notification.permission === "granted") {
        new Notification("링크가 복사되었습니다", {
          body: currentUrl,
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("링크가 복사되었습니다", {
              body: currentUrl,
            });
          }
        });
      }
    });
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 updateCloud 호출
    updateCloud();
  }, []);

  return (
    <div className="body-container">
      <div className="top-container">
        <div className="status">00님의 하늘</div>
        <div className="message-count">N개의 구름이 도착했어요!</div>
      </div>
      <div className="navbar">
        <img src="/img/main/navbar.png" alt="네비게이션바" />
      </div>
      <div className="middle-container">
        {hasLetter ? (
          <div className="clouds">나중에 구름띄우기 로직 구현</div>
        ) : (
          <>
            <div className="noclouds">
              <img src="/img/main/cryingcloud.png"></img>
              <div className="noclouds-message">아직 구름이 없어요ㅠ.ㅠ</div>
            </div>
            {/* 편지가 없을 경우 여기에 렌더링할 내용 추가 */}
          </>
        )}
        <div className="copylink_btn" onClick={handleButtonClick}>
          <img src="/img/main/copylink_btn.png" alt="링크복사 버튼이미지" />
        </div>
      </div>
    </div>
  );
}
