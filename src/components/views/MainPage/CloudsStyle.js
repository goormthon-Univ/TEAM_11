import { styled, keyframes } from "styled-components";

const fadeToOpacity = (opacity) => keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: ${opacity};
  }
`;

const fadeToScale = (scale) => keyframes`
  from {
    width: 155px;
  }
  to {
    width: ${175 + scale}px;
  }
`;
export const CloudWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 0 auto;
  margin-top: 100px;
  overflow-x: hidden;
  width: 100%;
`;
export const Cloud = styled.img`
  width: 155px;
  margin-top: -50px;
  &:nth-child(odd) {
    margin-left: -150px;
    width: 190px;
  }

  &:nth-child(even) {
    margin-right: -150px;
  }
  &:first-child {
    margin-top: 30px;
  }
  animation: ${(props) => keyframes`
  from { opacity: 1; }
  to { opacity: ${props.opacity}; }
`}
      1.5s ease-out forwards,
    ${(props) => keyframes`
    from {
      width: 155px;
    }
    to {
      width: ${175 + props.scale}px;
    }
`}
      1.5s ease-out forwards;
`;
