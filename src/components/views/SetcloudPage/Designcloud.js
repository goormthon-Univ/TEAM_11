import React from 'react'
import './Designcloud.css'

export default function Designcloud() {
    return (
        <div className='design-container'>
            <div className='title-container'>
                <div className='design-title'>
                    <img src='/img/designcloud/arrow.png' alt='arrowbtn'></img>
                    구름 꾸미기</div>
            </div>
            <div className='customed-cloud'><img src='/img/designcloud/default_cloud.png' alt='기본구름'></img></div>
            <div className='design-board'>
                <div className='custom-color'>
                    <div className='color-text'>구름 색상 선택</div>
                    <div className='colorpalette-container'>
                        <div className='palette-detail'><img src='/img/designcloud/pink_square.png' alt='default_face'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/yellow_square.png' alt='sadface'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/purple.png' alt='sadface'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/orange.png' alt='sadface'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/mint.png' alt='sadface'></img></div>
                    </div>

                </div>
                <div className='custom-face'>
                    <div className='face-text'>구름 표정 선택</div>
                    <div className='facepalette-container'>
                        <div className='palette-detail'><img src='/img/designcloud/default_face.png' alt='default_face'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/sad_face.png' alt='sadface'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/smile_face.png' alt='sadface'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/wink_face.png' alt='sadface'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/surprised_face.png' alt='sadface'></img></div>
                    </div>
                </div>
                <div className='custom-icon'>
                    <div className='icon-text'>아이콘 선택</div>
                    <div className='iconpalette-container'>
                        <div className='palette-detail'><img src='/img/designcloud/heart.png' alt='default_face'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/star.png' alt='sadface'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/moon.png' alt='sadface'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/sun.png' alt='sadface'></img></div>
                        <div className='palette-detail'><img src='/img/designcloud/rain.png' alt='sadface'></img></div>
                    </div>
                </div>
            </div>
            <button className='custom-complete'>구름 완성</button>
        </div>
    )
}
