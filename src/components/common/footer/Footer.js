import * as F from "./FooterStyle";
import { useNavigate } from "react-router-dom";

export default function Grateful() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/teamabout");
  };

  return (
    <>
      <F.Footer>
        <F.Copyright>
          Copyright © 2023 구름이 전해주는 편지. All rights reserved.
        </F.Copyright>
        <F.Introduce>
          <F.Link onClick={handleButtonClick}>
            <F.Text>구름이 전해주는 편지 소개</F.Text>
          </F.Link>
          <F.Text>|</F.Text>
          <F.Link onClick={handleButtonClick}>
            <F.Text>구루미 팀 소개</F.Text>
          </F.Link>
        </F.Introduce>
      </F.Footer>
    </>
  );
}
