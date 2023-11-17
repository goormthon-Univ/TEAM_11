import styled from "styled-components";
import titleImg from "./../../images/post/title.svg";
import contentImg from "./../../images/post/longContent.svg";
import nameImg from "./../../images/post/name.svg";

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

export const Info = styled.div`
  color: #4a4a4a;
  font-family: Anek Devanagari;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin: 10px 27px;
  position: relative;
  z-index: 100;
`;

export const Cloud = styled.img`
  width: 353px;
  margin-top: -80px;
  z-index: 10;
`;
export const Cloudhand = styled.img`
  width: 353px;
  margin-top: -80px;
  z-index: 10;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 360px;
  margin: 0 auto;
  margin-top: -125px;
`;
export const InputBack = styled.img`
  width: 360px;
  margin: 0 auto;
`;
export const InputWrapper = styled.div`
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
export const InputTitle = styled.input`
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
  padding: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #000;
  }
`;
export const InputContentWrapper = styled.div`
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
export const InputContent = styled.textarea`
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
export const InputName = styled.input`
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

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #000;
  }
`;
export const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 17px;
`;
export const Cancel = styled.div`
  width: 155px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  margin: 24px 0;
  color: #000;
  text-align: center;
  font-family: Anek Devanagari;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Submit = styled.div`
  width: 155px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  margin: 24px 0;
  color: #000;
  text-align: center;
  font-family: Anek Devanagari;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
