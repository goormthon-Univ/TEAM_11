import * as F from "./FooterStyle";

export default function Grateful() {
  return (
    <>
      <F.Footer>
        <F.Copyright>
          Copyright © 2023 구름이 전해주는 편지. All rights reserved.
        </F.Copyright>
        <F.Introduce>
          <div className="introduce-app">구름이 전해주는 편지 소개 </div>
          <div className="introduce-team"> | 구루미 팀 소개</div>
        </F.Introduce>
      </F.Footer>
    </>
  );
}
