import styled from "styled-components";

export const CloudWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 0 auto;
  margin-top: 50px;
  overflow-x: hidden;
  width: 100%;
`;
export const Cloud = styled.img`
  width: 350px;
  margin-top: -150px;
  &:nth-child(odd) {
    margin-left: -150px;
  }

  &:nth-child(even) {
    margin-right: -150px;
  }
  &:first-child {
    margin-top: 30px;
  }
`;
