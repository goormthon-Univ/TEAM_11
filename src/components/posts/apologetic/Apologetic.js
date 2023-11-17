import * as G from "./../../common/CloudStyle";
import gratefulCloud from "./../../../images/cloud/apologeticCloud.svg";
import postImg from "./../../../images/post/longPost.svg";
import { useState } from "react";
import axios from "axios";

export default function Apologetic() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [inputText, setInputText] = useState("");

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const handleInputChange = (e) => {
    const content = e.target.value;
    setInputText(content);
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    if (name.length <= 5) {
      setName(name);
    }
  };
  const CloudSubmit = (e) => {
    if (inputText.trim() !== "" && name.trim() !== "") {
      e.preventDefault();
      axios
        .post(``, {
          cloudOwner: "kms02171@naver.com", // 하늘 소유자 id
          title: title,
          nickname: name,
          content: inputText,
        })
        .then((response) => {
          console.log("작성 성공");
          setName("");
          setInputText("");
        })
        .catch((error) => {
          console.log("작성 실패", error.message);
        });
    } else {
      // 유효하지 않은 입력 처리
      console.log("유효하지 않은 입력");
    }
  };
  return (
    <>
      <G.Title>미안한 구름☁️ 띄우기</G.Title>
      <G.Info>
        미안한 구름은 시간이 지나면 점점 커져요!
        <br />
        솔직한 마음을 전해 보세요 💌
      </G.Info>
      <G.Cloud src={gratefulCloud} />
      <G.InputContainer>
        <G.InputBack src={postImg} />
        <G.InputWrapper>
          <G.InputTitle
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={handleTitleChange}
          />
          <G.InputContentWrapper>
            <G.InputContent
              placeholder="내용을 입력하세요."
              value={inputText}
              onChange={handleInputChange}
            />
          </G.InputContentWrapper>
          <G.InputName
            type="text"
            placeholder="작성자 닉네임(5글자 이내)"
            value={name}
            onChange={handleNameChange}
          />
        </G.InputWrapper>
      </G.InputContainer>
      <G.SubmitWrapper>
        <G.Cancel>취소하기</G.Cancel>
        <G.Submit onClick={CloudSubmit}>등록하기</G.Submit>
      </G.SubmitWrapper>
    </>
  );
}
