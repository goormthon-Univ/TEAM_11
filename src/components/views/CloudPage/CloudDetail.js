import { useEffect, useState } from "react";
import * as D from "./CloudDetailStye";
import gratefulImg from "./../../../images/cloud/gratefulCloud.svg";
import apologeticImg from "./../../../images/cloud/apologeticCloud.svg";
import supportiveImg from "./../../../images/cloud/supportiveCloud.svg";
import boomImg from "./../../../images/cloud/boomCloud.svg";
import tailCloud from "./../../../images/cloud/tailCloud.svg";

export default function CloudDetail() {
  const [cloudImg, setCloudImg] = useState("");
  const [restTime, setRestTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = {
    cloudType: "4",
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
        setCloudImg(supportiveImg);
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

  function goModal() {
    setIsModalOpen(true);
  }
  function noModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <D.Title>00님의 {data.cloudIdx}번째 구름☁️</D.Title>
      {data.cloudType === "5" && <D.BoomCount>💣{restTime}</D.BoomCount>}
      <D.Cloud src={cloudImg} />
      <D.CloudWrapper>
        <D.CloudTitle>{cloud.title}</D.CloudTitle>
        <D.CloudContent>{cloud.content}</D.CloudContent>
        <D.CloudNameWrapper>
          <D.CloudDate>{formattedDateTime}</D.CloudDate>
          <D.CloudName>From.{cloud.nickname}</D.CloudName>
        </D.CloudNameWrapper>
      </D.CloudWrapper>
      {data.cloudType === "4" && (
        <D.CommentContainer>
          <D.CommentWrapper>
            <D.Comment src={tailCloud} />
            <D.commentContent>파이팅</D.commentContent>
          </D.CommentWrapper>
          <D.CommentWrapper>
            <D.Comment src={tailCloud} />
            <D.commentContent>dd</D.commentContent>
          </D.CommentWrapper>
        </D.CommentContainer>
      )}
      <D.Delete onClick={goModal}>삭제하기</D.Delete>

      {isModalOpen && (
        <D.Modal>
          <D.ModalTitle>삭제하시겠습니까?</D.ModalTitle>
          <D.ModalContent>삭제하시겠습니까?</D.ModalContent>
          <D.ModalButtonWrapper>
            <D.ModalCancel onClick={noModal}>취소</D.ModalCancel>
            <D.ModalDelete>확인</D.ModalDelete>
          </D.ModalButtonWrapper>
        </D.Modal>
      )}
      {isModalOpen && <D.Overlay></D.Overlay>}
    </>
  );
}
