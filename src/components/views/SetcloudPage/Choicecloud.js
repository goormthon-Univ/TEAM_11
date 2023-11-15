import React from 'react'
import './Choicecloud.css'

export default function choicecloud() {
    return (
        <div className='box-container'>
            <div className='title'>구름 선택</div>
            <div className='cloud-box'><img src='/img/setcloud/cloudbox.png' alt="구름선택 박스" /></div>
            <div className='cloud-box'><img src='/img/setcloud/cloudbox.png' alt="구름선택 박스" /></div>
            <div className='cloud-box'><img src='/img/setcloud/cloudbox.png' alt="구름선택 박스" /></div>
        </div>
    )
}
