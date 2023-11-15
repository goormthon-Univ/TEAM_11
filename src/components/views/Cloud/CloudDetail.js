import { useEffect, useState } from "react";
import * as D from "./../Cloud/CloudDetailStye";
import gratefulImg from "./../../../images/cloud/gratefulCloud.svg";
import apologeticImg from "./../../../images/cloud/apologeticCloud.svg";
import boomImg from "./../../../images/cloud/boomCloud.svg";

export default function CloudDetail() {
  const [cloudImg, setCloudImg] = useState("");
  const [restTime, setRestTime] = useState("");
  const data = {
    cloudType: "3",
    cloudIdx: "1",
  };
  useEffect(() => {
    switch (data.cloudType) {
      case "1":
        setCloudImg(gratefulImg);
        break;
      case "2":
        setCloudImg(gratefulImg);
        break;
      case "3":
        setCloudImg(apologeticImg);
        break;
      case "4":
        setCloudImg(gratefulImg);
        break;
      default:
        setCloudImg(boomImg);
        break;
    }
  }, [data.cloudType]);

  const cloud = {
    title: "정말 미안해요",
    content:
      "미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아 미안한 구름 등록이다아",
    createdAt: "2023-11-15T16:58:43.763204",
    nickname: "미안함",
  };
  function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return date
      .toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/\. /g, ".");
  }
  const formattedDateTime = formatDateTime(cloud.createdAt);
  useEffect(() => {
    const endTime = new Date(cloud.createdAt);
    endTime.setHours(endTime.getHours() + 24);

    const updateRestTime = () => {
      const now = new Date();
      const timeLeft = endTime - now;

      if (timeLeft <= 0) {
        setRestTime("시간 만료");
        return;
      }

      const hours = Math.floor(timeLeft / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      setRestTime(`${hours}:${minutes}:${seconds}`);
    };

    updateRestTime();
    const intervalId = setInterval(updateRestTime, 1000);

    return () => clearInterval(intervalId);
  }, [cloud.createdAt]);

  return (
    <>
      <D.Title>00님의 {data.cloudIdx}번째 구름☁️</D.Title>
      {data.cloudType === "5" ? <D.BoomCount>💣{restTime}</D.BoomCount> : null}
      <D.Cloud src={cloudImg} />
      <D.CloudWrapper>
        <D.CloudTitle>{cloud.title}</D.CloudTitle>
        <D.CloudContent>{cloud.content}</D.CloudContent>
        <D.CloudNameWrapper>
          <D.CloudDate>{formattedDateTime}</D.CloudDate>
          <D.CloudName>From.{cloud.nickname}</D.CloudName>
        </D.CloudNameWrapper>
      </D.CloudWrapper>
      <D.Delete>삭제하기</D.Delete>
    </>
  );
}
