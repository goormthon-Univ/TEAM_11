import React from 'react'
import './Specialcloud.css'

export default function Specialcloud() {
    return (
        <div className='specialbox-container'>
            <div className='title-wrapper'><div className='title'><img src='/img/setcloud/arrow.png' alt="arrowbtn" />구름 선택</div></div>

            <div className='cloud-box'><img src='/img/setcloud/cloudbox_grateful.png' alt="고마운구름선택" />
                <div className='selectgrateful'>고마운 구름</div>
                <div className='explain-grateful'>시간이 지나면 점점 커져요!</div>
            </div>
            <div className='cloud-box'><img src='/img/setcloud/cloudbox_apologetic.png' alt="미안한구름선택" />
                <div className='selectapologetic'>미안한 구름</div>
                <div className='explain-apologetic'>시간이 지나면 점점 흐려져요!</div>
            </div>
            <div className='cloud-box'><img src='/img/setcloud/cloudbox_cheerful.png' alt="응원하는구름선택" />
                <div className='selectcheerful'>응원하는 구름</div>
                <div className='explain-cheerful'>내 구름에 다른 친구들이<br></br>꼬리를 달 수 있어요!</div>
            </div>
        </div>
    )
}
