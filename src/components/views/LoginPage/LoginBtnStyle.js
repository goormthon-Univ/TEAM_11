import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;
export const ID = styled.input`
  width: 280px;
  height: 42px;
  border-radius: 5px;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  &:placeholder {
    color: #606060;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 100% */
    letter-spacing: -0.165px;
  }
  &:focus {
    outline: none;
  }
  padding: 0 10px;
  box-sizing: border-box;
`;
export const PW = styled.input`
  width: 280px;
  height: 42px;
  width: 280px;
  height: 42px;
  border: none;
  &:placeholder {
    color: #606060;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 100% */
    letter-spacing: -0.165px;
  }
  &:focus {
    outline: none;
  }
  padding: 0 10px;
  box-sizing: border-box;
`;
export const Submit = styled.div`
  border-radius: 50px;
  background: #448af7;
  width: 283px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Anek Devanagari;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Info = styled.div`
  color: #303030;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 120% */
  letter-spacing: -0.165px;
`;
export const Signup = styled.a`
  color: #e7544b;
  text-decoration: none;
`;
