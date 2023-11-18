import styled from "styled-components";

export const CloudWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
export const CloudBody = styled.img`
  display: block;
  width: ${(props) => props.width || "280px"};
  height: auto;
`;
export const CloudFace = styled.img`
  position: absolute;
  width: 20%;
  top: 30%;
  height: auto;
`;
