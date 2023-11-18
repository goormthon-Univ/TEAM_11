import styled from "styled-components";

export const SignupContainer = styled.div`
  margin: 0 auto;
`;
export const Prev = styled.img``;
export const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
`;
export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 20px auto;
  gap: 10px;
`;
export const SubT = styled.p`
  color: #ececec;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 100% */
  letter-spacing: -0.165px;
`;
export const Input = styled.input`
  border-radius: 5px;
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
  border: none;
  width: 295px;
  height: 42px;
`;
export const Submit = styled.div`
  width: 293.918px;
  height: 30px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 120% */
  letter-spacing: -0.165px;
  width: 301px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #448af7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
