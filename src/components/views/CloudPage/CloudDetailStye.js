import styled from "styled-components";
import titleImg from "./../../../images/post/title.svg";
import contentImg from "./../../../images/post/longContent.svg";
import nameImg from "./../../..//images/post/name.svg";

export const Title = styled.p`
  color: #000;
  font-family: Anek Devanagari;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: left;
  margin: 29px 0 0 27px;
`;
export const BoomCount = styled.div`
  color: #000;
  text-align: center;
  font-family: Anek Devanagari;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  top: 145px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;
export const Cloud = styled.img`
  width: 350px;
  margin: 0;
`;
export const CloudContainer = styled.div`
  position: relative;
  width: 360px;
  margin: 0 auto;
  margin-top: -125px;
`;
export const Back = styled.img`
  width: 360px;
  margin: 0 auto;
`;
export const CloudWrapper = styled.div`
  position: absolute;
  top: 23px;
  left: 0;
  width: 353px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
`;
export const CloudTitle = styled.div`
  width: 310px;
  height: 53px;
  border: none;
  color: #000;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  background: none;
  background-image: url(${titleImg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 16px 20px;
  text-align: left;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #000;
  }
`;
export const ContentWrapper = styled.div`
  width: 310px;
  height: 395px;
  padding: 40px 20px;
  background-image: url(${contentImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin: 0;
  margin-top: -10px;
`;
export const CloudContent = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  color: #000;
  font-family: Anek Devanagari;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background: none;
  box-sizing: border-box;
  text-align: left;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 두께 지정 */
    border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f7fefe; /* 스크롤바 트랙 색상 지정 */
    border-radius: 5px; /* 스크롤바 모서리를 둥글게 만듭니다. */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2) inset;
  }
`;
export const CloudNameWrapper = styled.div`
  width: 310px;
  height: 51px;
  border: none;
  resize: none;
  color: #000;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: none;
  background-image: url(${nameImg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 40px 20px;
  margin-top: -20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const CloudDate = styled.p`
  color: #000;
  text-align: center;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -10px;
`;

export const CloudName = styled.p`
  color: #000;
  text-align: right;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: -10px;
`;

export const Delete = styled.div`
  width: 294px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  margin: 0 auto;
  color: #000;
  text-align: center;
  font-family: Anek Devanagari;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 0 auto;
  margin-top: -50px;
  overflow-x: hidden;
`;
export const CommentWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 212px;
  &:nth-child(odd) {
    margin-top: -160px;
    margin-left: -100px;
  }

  &:nth-child(even) {
    margin-top: -160px;
    margin-right: -100px;
  }
  &:first-child {
    margin-top: 0;
  }
`;
export const Comment = styled.img``;
export const commentContent = styled.div`
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: #000;
  text-align: center;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Modal = styled.div`
  width: 284px;
  height: 160px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -80px 0 0 -142px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  z-index: 20;
`;

export const CommentInputContainer = styled.div`
  width: 310px;
  background: #fff; // 배경색은 흰색
  padding: 10px; // 패딩
  border-radius: 20px; // 테두리 둥글게
  margin: 20px auto; // 마진
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); // 그림자 효과
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 입력창 스타일링
export const CommentInput = styled.input`
  width: 100%; // 너비 100%
  border: none; // 테두리 없음
  outline: none; // 선택됐을 때 테두리 없음
  padding: 8px; // 패딩
`;
export const CommentSubmit = styled.div`
  width: 100px;
  color: #227afd;
  cursor: pointer;
`;
export const ModalTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: Yrsa;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;
export const ModalContent = styled.h1`
  color: #000;
  text-align: center;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;
export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 0;
`;
export const ModalCancel = styled.div`
  border-radius: 5px;
  background: #e0f5ff;
  width: 77px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ModalDelete = styled.div`
  border-radius: 5px;
  background: #ececec;
  width: 77px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 투명도를 가진 검은색으로 톤 다운 */
  z-index: 10;
  backdrop-filter: blur(3px);
`;
