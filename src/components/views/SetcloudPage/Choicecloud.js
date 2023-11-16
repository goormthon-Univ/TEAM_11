import React from "react";
import "./Choicecloud.css";

export default function choicecloud() {
  return (
    <div className="box-container">
      <div className="title-wrapper">
        <div className="title">
          <img src="/img/setcloud/arrow.png" alt="arrowbtn" />
          구름 선택
        </div>
      </div>

      <div className="cloud-box">
        <img src="/img/setcloud/cloudbox_common.png" alt="일반구름선택" />
        <div className="selectcommon">일반 구름</div>
        <div className="explain-common">전하지 못했던 진심을 전해요.</div>
      </div>
      <a href="/specialcloud" className="cloud-box">
        <img src="/img/setcloud/cloudbox_special.png" alt="특별구름선택" />
        <div className="selectspecial">특별한 구름</div>
        <div className="explain-special">
          고마운 마음, 미안한 마음,<br></br>응원하는 마음을 전해요.
        </div>
      </a>
      <a href="/boom" className="cloud-box">
        <img src="/img/setcloud/cloudbox_common.png" alt="펑구름선택" />
        <div className="selectpung">펑 구름</div>
        <div className="explain-pung">24시간 뒤에 사라져요!</div>
      </a>
    </div>
  );
}
