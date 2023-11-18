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

export default function Clouds() {
  const cloudImage = process.env.PUBLIC_URL + "/img/designcloud/whtie.png";
  const navigate = useNavigate();
  const cloudImages = {
    2: gratefulImg,
    3: apologeticImg,
    4: supportiveImg,
    5: boomImg, // 클라우드 타입 5에 대한 이미지를 추가하세요.
  };
  const data = [
    {
      title: "정말 고마워요",
      content:
        "고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다",
      createdAt: "2023-11-15T16:58:41.387221",
      nickname: "닉네임입니다",
      cloudType: 2,
      cloudIdx: 1,
      opacity: 0.5,
      scale: 5,
    },
    {
      title: "일반 구름 등록",
      content:
        "일반 구름 등록 데이터입니다. 일반 구름 등록 데이터입니다. 일반 구름 등록 데이터입니다.",
      createdAt: "2023-11-16T19:12:06.10943",
      nickname: "구름",
      color: "blue",
      emotion: 3,
      icons: [1, 2, 3],
      cloudType: 1,
      cloudIdx: 1,
    },
    {
      title: "정말 미안해요",
      content:
        "미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아",
      createdAt: "2023-11-15T16:58:43.763204",
      nickname: "미안함",
      cloudType: 3,
      cloudIdx: 3,
      opacity: 0.8,
      scale: 10,
    },
    {
      title: "정말 미안해요",
      content:
        "미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아",
      createdAt: "2023-11-15T16:58:43.763204",
      nickname: "미안함",
      cloudType: 4,
      cloudIdx: 3,
      opacity: 0.8,
      scale: 10,
    },
    {
      title: "정말 고마워요",
      content:
        "고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다",
      createdAt: "2023-11-15T16:58:41.387221",
      nickname: "닉네임입니다",
      cloudType: 2,
      cloudIdx: 1,
      opacity: 0.5,
      scale: 5,
    },
    {
      title: "일반 구름 등록",
      content:
        "일반 구름 등록 데이터입니다. 일반 구름 등록 데이터입니다. 일반 구름 등록 데이터입니다.",
      createdAt: "2023-11-16T19:12:06.10943",
      nickname: "구름",
      color: "blue",
      emotion: 3,
      icons: [1, 2, 3],
      cloudType: 1,
      cloudIdx: 1,
    },
    {
      title: "정말 미안해요",
      content:
        "미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아",
      createdAt: "2023-11-15T16:58:43.763204",
      nickname: "미안함",
      cloudType: 3,
      cloudIdx: 3,
      opacity: 0.8,
      scale: 10,
    },
    {
      title: "정말 미안해요",
      content:
        "미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아",
      createdAt: "2023-11-15T16:58:43.763204",
      nickname: "미안함",
      cloudType: 4,
      cloudIdx: 3,
      opacity: 0.8,
      scale: 10,
    },
  ];

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
