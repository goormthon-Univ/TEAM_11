import React from "react";
import "./TeamAbout.css";

export default function TeamAbout() {
  return (
    <>
      <div className="sentbycloud">
        <img src="/img/login/sentbycloud.png" alt="제목" />
        <div className="teamintroduce">'구루미' 팀 소개</div>
      </div>
      <div className="teammemer">
        <img src="/img/teamimage/곽호은.png" alt="곽호은" />
        <img src="/img/teamimage/김가은.png" alt="김가은" />
        <img src="/img/teamimage/김채현.png" alt="김채현" />
        <img src="/img/teamimage/나혜인.png" alt="나혜인" />
        <img src="/img/teamimage/강민서.png" alt="강민서" />
        <img src="/img/teamimage/김현우.png" alt="김현우" />
      </div>
    </>
  );
}
