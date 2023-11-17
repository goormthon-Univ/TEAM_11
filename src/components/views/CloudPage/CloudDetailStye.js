import styled from "styled-components";

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
  margin-top: 36px;
`;
export const Cloud = styled.img`
  width: 350px;
  margin: 0;
`;
export const CloudWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
export const CloudTitle = styled.div`
  width: 239px;
  height: 59px;
  border: none;
  resize: none;
  color: #000;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: left;
`;
export const CloudContent = styled.div`
  width: 239px;
  height: 304px;
  border: none;
  resize: none;
  color: #000;
  font-family: Anek Devanagari;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;
export const CloudNameWrapper = styled.div`
  width: 239px;
  display: flex;
  justify-content: space-between;
`;
export const CloudDate = styled.p`
  color: #000;
  text-align: center;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CloudName = styled.p`
  color: #000;
  text-align: right;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Delete = styled.div`
  width: 294px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  margin: 24px auto;
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
  position: absolute;
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
  background: #fff; // 배경색은 흰색
  padding: 10px; // 패딩
  border-radius: 20px; // 테두리 둥글게
  margin: 20px; // 마진
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
