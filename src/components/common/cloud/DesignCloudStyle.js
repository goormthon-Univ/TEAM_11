import styled from "styled-components";

export const CloudWrapper = styled.div`
  position: relative; // 자식 요소의 포지셔닝 기준이 됩니다.
  display: flex;
  margin-top: 10px;
  justify-content: center; // 가로 방향으로 중앙 정렬합니다.
  align-items: center; // 세로 방향으로 중앙 정렬합니다.
`;
export const CloudBody = styled.img`
  display: block; // 이미지가 block 레벨 요소로 렌더링됩니다.
  width: 280px; // 원하는 크기로 설정합니다.
  height: auto; // 이미지의 비율을 유지합니다.
`;
export const CloudFace = styled.img`
  position: absolute; // CloudWrapper에 대해 절대적인 위치입니다.
  width: 45px; // 얼굴 이미지의 크기를 설정합니다.
  top: 75px;
  height: auto; // 이미지의 비율을 유지합니다.
`;
