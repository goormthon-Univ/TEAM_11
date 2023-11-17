import { useEffect, useState } from "react";
import * as D from "./CloudDetailStye";
import gratefulImg from "./../../../images/cloud/gratefulCloud.svg";
import postImg from "./../../../images/post/longPost.svg";
import apologeticImg from "./../../../images/cloud/apologeticCloud.svg";
import supportiveImg from "./../../../images/cloud/supportiveCloud.svg";
import boomImg from "./../../../images/cloud/boomCloud.svg";
import tailCloud from "./../../../images/cloud/tailCloud.svg";
import axios from "axios";

export default function CloudDetail() {
  const [cloudImg, setCloudImg] = useState("");
  const [restTime, setRestTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");
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
    title: "정말 응원해요",
    content: "응원구름 등록함",
    createdAt: "2023-11-15T16:58:46.394013",
    nickname: "응원함",
    tailCloudContents: [
      "일이삼사오육칠팔구십일이삼사오육칠팔구십",
      "일이삼사오육칠팔구십일이삼사오육칠팔구십",
      "일이삼사오육칠팔구십일이삼사오육칠팔구십",
      "일이삼사오육칠팔구십일이삼사오육칠팔구십",
    ],
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
  const handleCommentChange = (event) => {
    const comment = event.target.value;
    if (comment.length <= 20) {
      setComment(comment);
    }
  };
  const tailSubmit = (e) => {
    if (comment.trim() !== "") {
      e.preventDefault();
      axios
        .post(`http://43.202.49.87:8080/clouds/supportive/tail`, {
          cloudIdx: data.cloudIdx,
          content: comment,
        })
        .then((response) => {
          console.log("작성 성공");
          setComment("");
        })
        .catch((error) => {
          console.log(data.cloudIdx, comment);
          console.log("작성 실패", error.message);
        });
    } else {
      // 유효하지 않은 입력 처리
      console.log("유효하지 않은 입력");
    }
  };
  const deleteCloud = () => {
    axios
      .delete(
        `https://43.202.49.87:8080/clouds/${data.cloudType}/${data.cloudIdx}`
      )
      .then((response) => {
        console.log("구름 삭제 성공");
      })
      .catch((error) => {
        console.error("구름 삭제 실패", error.message);
      });
    setIsModalOpen(false);
  };
  return (
    <>
      <D.Title>00님의 {data.cloudIdx}번째 구름☁️</D.Title>
      {data.cloudType === "5" && <D.BoomCount>💣{restTime}</D.BoomCount>}
      <D.Cloud src={cloudImg} />
      <D.CloudContainer>
        <D.Back src={postImg} />
        <D.CloudWrapper>
          <D.CloudTitle>{cloud.title}</D.CloudTitle>
          <D.ContentWrapper>
            <D.CloudContent>{cloud.content}</D.CloudContent>
          </D.ContentWrapper>
          <D.CloudNameWrapper>
            <D.CloudDate>{formattedDateTime}</D.CloudDate>
            <D.CloudName>From.{cloud.nickname}</D.CloudName>
          </D.CloudNameWrapper>
        </D.CloudWrapper>
      </D.CloudContainer>
      {data.cloudType === "4" && (
        <D.CommentContainer>
          {cloud.tailCloudContents.map((tailContent, index) => (
            <D.CommentWrapper key={index}>
              <D.Comment src={tailCloud} />
              <D.commentContent>{tailContent}</D.commentContent>
            </D.CommentWrapper>
          ))}
        </D.CommentContainer>
      )}
      <D.Delete onClick={goModal}>삭제하기</D.Delete>
      {data.cloudType === "4" && (
        <D.CommentInputContainer>
          <D.CommentInput
            type="text"
            placeholder="꼬리 구름 내용 작성(20글자 이내)"
            value={comment}
            onChange={handleCommentChange}
          />
          <D.CommentSubmit onClick={tailSubmit}>등록</D.CommentSubmit>
        </D.CommentInputContainer>
      )}
      {isModalOpen && (
        <D.Modal>
          <D.ModalTitle>삭제하시겠습니까?</D.ModalTitle>
          <D.ModalContent>삭제하시겠습니까?</D.ModalContent>
          <D.ModalButtonWrapper>
            <D.ModalCancel onClick={noModal}>취소</D.ModalCancel>
            <D.ModalDelete onClick={deleteCloud}>확인</D.ModalDelete>
          </D.ModalButtonWrapper>
        </D.Modal>
      )}
      {isModalOpen && <D.Overlay></D.Overlay>}
    </>
  );
}
