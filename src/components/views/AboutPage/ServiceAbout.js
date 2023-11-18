import React from "react";
import "./TeamAbout.css";

export default function ServiceAbout() {
  return (
    <>
      <div className="sentbycloud">
        <img src="/img/login/sentbycloud.png" alt="제목" />
        <div className="teamintroduce">서비스 소개</div>
        <div className="servicecontent">
          구름이 전해주는 편지는 대학생 연합 해커톤 동아리 <br></br>
          ‘구름톤 Univ’에서 탄생된 서비스로,<br></br>
          구름을 통해 여러분이 전하지 못했던 마음을<br></br>
          대신 전해드리기 위해 탄생한 이벤트 서비스에요.<br></br>
          <br></br>
          ‘평소 전하지 못한 진심을 마구가 전해 드릴게요!’
        </div>
      </div>
      <div className="teammemer">
        <img src="/img/serviceimage/일반구름.png" alt="일반구름" />
        <img src="/img/serviceimage/고마운구름.png" alt="고마운구름" />
        <img src="/img/serviceimage/미안한구름.png" alt="미안한구름" />
        <img src="/img/serviceimage/응원하는구름.png" alt="응원하는구름" />
        <img src="/img/serviceimage/펑구름.png" alt="펑구름" />
      </div>
    </>
  );
}
