import React from 'react'
import './Designcloud.css'
<<<<<<< HEAD
import { useState } from 'react';
=======
import axios from "axios";
>>>>>>> e6f49dee5b5c7349a5f011fff4e1b695929c10fe

export default function Designcloud() {
    const [selectedColor, setSelectedColor] = useState('/img/designcloud/default_cloud.png');
    const [selectedFace, setSelectedFace] = useState('/img/designcloud/default_face.png');
    const [selectedIcon, setSelectedIcon] = useState('/img/designcloud/heart_icon.png');

    const handleColorClick = (imageSrc) => {
        // 클릭한 이미지의 경로를 상태로 설정
        setSelectedColor(imageSrc);
    };
    const handleFaceClick = (imageSrc) => {
        // 클릭한 이미지의 경로를 상태로 설정
        setSelectedFace(imageSrc);
    };
    const handleIconClick = (imageSrc) => {
        // 클릭한 이미지의 경로를 상태로 설정
        setSelectedIcon(imageSrc);
    };

    return (
        <div className='design-container'>
            <div className='title-container'>
                <div className='design-title'>
                    <img src='/img/designcloud/arrow.png' alt='arrowbtn'></img>
                    구름 꾸미기</div>
            </div>
            <div className='customed-cloud'>
                <img className='cloud-image' src={selectedColor} alt='색상'></img>
                <img className='face-image' src={selectedFace} alt='표정'></img>
                <img className='icon-image' src={selectedIcon} alt='아이콘'></img>
            </div>
            <div className='design-board'>
                <div className='custom-color'>
                    <div className='color-text'>구름 색상 선택</div>
                    <div className='colorpalette-container'>
                        <div className='palette-detail' onClick={() => handleColorClick('/img/designcloud/pink_cloud.png')}><img src='/img/designcloud/pink_square.png' alt='default_face'></img></div>
                        <div className='palette-detail' onClick={() => handleColorClick('/img/designcloud/yellow_cloud.png')}><img src='/img/designcloud/yellow_square.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleColorClick('/img/designcloud/purple_cloud.png')}><img src='/img/designcloud/purple.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleColorClick('/img/designcloud/orange_cloud.png')}><img src='/img/designcloud/orange.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleColorClick('/img/designcloud/mint_cloud.png')}><img src='/img/designcloud/mint.png' alt='sadface'></img></div>
                    </div>

                </div>
                <div className='custom-face'>
                    <div className='face-text'>구름 표정 선택</div>
                    <div className='facepalette-container'>
                        <div className='palette-detail' onClick={() => handleFaceClick('/img/designcloud/default_face.png')}><img src='/img/designcloud/default.png' alt='default_face'></img></div>
                        <div className='palette-detail' onClick={() => handleFaceClick('/img/designcloud/sad_face.png')}><img src='/img/designcloud/sad.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleFaceClick('/img/designcloud/smile_face.png')}><img src='/img/designcloud/smile.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleFaceClick('/img/designcloud/wink_face.png')}><img src='/img/designcloud/wink.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleFaceClick('/img/designcloud/surprised_face.png')}><img src='/img/designcloud/surprised.png' alt='sadface'></img></div>
                    </div>
                </div>
                <div className='custom-icon'>
                    <div className='icon-text'>아이콘 선택</div>
                    <div className='iconpalette-container'>
                        <div className='palette-detail' onClick={() => handleIconClick('/img/designcloud/heart_icon.png')}><img src='/img/designcloud/heart.png' alt='default_face'></img></div>
                        <div className='palette-detail' onClick={() => handleIconClick('/img/designcloud/star_icon.png')}><img src='/img/designcloud/star.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleIconClick('/img/designcloud/moon_icon.png')}><img src='/img/designcloud/moon.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleIconClick('/img/designcloud/sun_icon.png')}><img src='/img/designcloud/sun.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleIconClick('/img/designcloud/rain_icon.png')}><img src='/img/designcloud/rain.png' alt='sadface'></img></div>
                        <div className='palette-detail' onClick={() => handleIconClick('/img/designcloud/rainbow_icon.png')}><img src='/img/designcloud/rainbow.png' alt='sadface'></img></div>
                    </div>
                </div>
            </div>
            <button className='custom-complete'>구름 완성</button>
        </div>
    )
}
