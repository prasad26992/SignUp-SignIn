import React from 'react'
import './Signimg.css';

const SIgn_img = () => {
    return (
        <>
            <div className="right_data" style={{ width: "100%" }}>
                <div className="sign_img">
                    <img src="./1.png" style={{ height:"80%", backgroundColor:  "#EE6000" }} alt="" />                    
                    
                </div>
                <div className='kling'>
                <img src='./Kling.png' alt='' />
                </div>
                <div className='shop2cash'>
                <img src='./Shop2Cash.png' alt='' />
                </div>
                <div className='img1'><img src='./image1.png' alt=''/></div>
                <div className='img2'><img src='./image2.png' alt=''/></div>
                <div className='img3'><img src='./image3.png' alt=''/></div>
                <div className='img4'><img src='./image4.png' alt=''/></div>
            </div>
        </>
    )
}

export default SIgn_img