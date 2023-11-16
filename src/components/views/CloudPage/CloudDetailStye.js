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
