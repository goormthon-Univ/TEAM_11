import { useState } from "react";
import * as N from "./NavStyle";
import * as D from "./../CloudPage/CloudDetailStye";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function goModal() {
    setIsModalOpen(true);
  }
  function noModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <N.NavWrapper>
        <N.Text>로그아웃</N.Text>
        <N.Bar />
        <N.Text onClick={goModal}>회원탈퇴</N.Text>
      </N.NavWrapper>
      {isModalOpen && (
        <D.Modal>
          <D.ModalTitle>탈퇴하시겠습니까?</D.ModalTitle>
          <D.ModalContent>탈퇴 후 복구는 절대 불가능합니다.</D.ModalContent>
          <D.ModalButtonWrapper>
            <D.ModalCancel onClick={noModal}>취소</D.ModalCancel>
            <D.ModalDelete>확인</D.ModalDelete>
          </D.ModalButtonWrapper>
        </D.Modal>
      )}
      {isModalOpen && <D.Overlay></D.Overlay>}
    </>
  );
}
