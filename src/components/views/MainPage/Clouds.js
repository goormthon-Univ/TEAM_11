import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./CloudsStyle";
import axios from "axios";
import Designcloud from "../../common/cloud/DesignCloud";
import gratefulImg from "./../../../images/cloud/gratefulCloud.svg";
import apologeticImg from "./../../../images/cloud/apologeticCloud.svg";
import supportiveImg from "./../../../images/cloud/supportiveMain.svg";
import boomImg from "./../../../images/cloud/boomCloud.svg";

export default function Clouds({ data }) {
  const cloudImage = process.env.PUBLIC_URL + "/img/designcloud/whtie.png";
  const navigate = useNavigate();
  const cloudImages = {
    2: gratefulImg,
    3: apologeticImg,
    4: supportiveImg,
    5: boomImg, // 클라우드 타입 5에 대한 이미지를 추가하세요.
  };

  const goToCloudDetail = (cloudType, cloudIdx) => {
    navigate(`/cloud/${cloudType}/${cloudIdx}`);
  };
  return (
    <>
      <C.CloudWrapper>
        {data &&
          data.map((cloud, index) => {
            if (cloud.cloudType === 1) {
              return (
                <div
                  onClick={() =>
                    goToCloudDetail(cloud.cloudType, cloud.cloudIdx)
                  }
                >
                  <Designcloud
                    className="cloud-item"
                    key={index}
                    color={cloud.color}
                    emotion={cloud.emotion}
                    width="155px"
                  />
                </div>
              );
            } else {
              const imgSrc = cloudImages[cloud.cloudType] || cloudImage;
              return (
                <C.Cloud
                  className="cloud-item"
                  key={index}
                  src={imgSrc}
                  opacity={cloud.opacity}
                  scale={cloud.scale}
                  onClick={() =>
                    goToCloudDetail(cloud.cloudType, cloud.cloudIdx)
                  }
                />
              );
            }
          })}
      </C.CloudWrapper>
    </>
  );
}
