import { useEffect, useState } from "react";
import * as D from "./DesignCloudStyle";

export default function Designcloud({ color, emotion }) {
  const [body, setBody] = useState("");
  const [face, setFace] = useState("");

  const colors = {
    white: process.env.PUBLIC_URL + "/img/designcloud/whtie.png", // 파일명이 올바른지 확인하세요.
    mint: process.env.PUBLIC_URL + "/img/designcloud/mint_cloud.png",
    orange: process.env.PUBLIC_URL + "/img/designcloud/orange_cloud.png",
    pink: process.env.PUBLIC_URL + "/img/designcloud/pink_cloud.png",
    purple: process.env.PUBLIC_URL + "/img/designcloud/purple_cloud.png",
  };
  const emotions = {
    1: process.env.PUBLIC_URL + "/img/designcloud/default_face.png", // 파일명이 올바른지 확인하세요.
    2: process.env.PUBLIC_URL + "/img/designcloud/sad_face.png",
    3: process.env.PUBLIC_URL + "/img/designcloud/smile_face.png",
    4: process.env.PUBLIC_URL + "/img/designcloud/surprised_face.png",
    5: process.env.PUBLIC_URL + "/img/designcloud/wink_face.png",
  };

  useEffect(() => {
    console.log(color, emotion);
    const newBody = colors[color] || colors.white;
    setBody(newBody);
    const newFace = emotions[emotion];
    setFace(newFace);
  }, [color, emotion]);
  return (
    <>
      <D.CloudWrapper>
        <D.CloudBody src={body} />
        <D.CloudFace src={face} />
      </D.CloudWrapper>
    </>
  );
}
