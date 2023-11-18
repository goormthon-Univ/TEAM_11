import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
`;
export const ID = styled.input`
  width: 280px;
  height: 42px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
  &: placeholder {
    color: #606060;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 100% */
    letter-spacing: -0.165px;
  }
`;
export const PW = styled.input`
  width: 280px;
  height: 42px;
  width: 280px;
  height: 42px;
  &: placeholder {
    color: #606060;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 100% */
    letter-spacing: -0.165px;
  }
`;
