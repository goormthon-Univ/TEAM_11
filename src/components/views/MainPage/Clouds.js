import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./CloudsStyle";
import axios from "axios";

export default function Clouds() {
  const cloudImage =
    process.env.PUBLIC_URL + "/img/designcloud/default_cloud.png";
  const navigate = useNavigate();
  const data = [
    {
      title: "정말 고마워요",
      content:
        "고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다",
      createdAt: "2023-11-15T16:58:41.387221",
      nickname: "닉네임입니다",
      cloudType: 3,
      cloudIdx: 1,
    },
    {
      title: "정말 고마워요",
      content:
        "고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다",
      createdAt: "2023-11-15T16:58:41.387221",
      nickname: "닉네임입니다",
      cloudType: 3,
      cloudIdx: 2,
    },
    {
      title: "정말 고마워요",
      content:
        "고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다고마운 구름 등록이다",
      createdAt: "2023-11-15T16:58:41.387221",
      nickname: "닉네임입니다",
      cloudType: 3,
      cloudIdx: 3,
    },
  ];
  const goToCloudDetail = (cloudType, cloudIdx) => {
    navigate(`/cloud/${cloudType}/${cloudIdx}`);
  };
  return (
    <>
      <C.CloudWrapper>
        {data &&
          data.map((cloud, index) => (
            <C.Cloud
              key={index}
              src={cloudImage}
              onClick={() => goToCloudDetail(cloud.cloudType, cloud.cloudIdx)}
            />
          ))}
      </C.CloudWrapper>
    </>
  );
}
