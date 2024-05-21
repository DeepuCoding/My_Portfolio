import React from 'react';
import './MyWork.css';
import thm_pat from '../../assets/theme_pattern.svg';
import mywrk_data from '../../assets/mywork_data';
import arw_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={thm_pat} />
        </div>
        <div className="mywork-container">
            {mywrk_data.map((work, index) => {
                return <img key={index} src={work.w_img}/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arw_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork