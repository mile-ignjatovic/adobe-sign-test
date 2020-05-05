
import React from 'react';
import style from './Header.module.css';
import sunflower from '../../shared/Assets/sunflower50.png';
import Navbar from '../Navbar/Navbar'
import TooltipIcon from '../../shared/components/TooltipIcon/TooltipIcon';



const Header = (props) => {
    return (
        <div>
            <div className={style.Header}>
                <div className={style.HeaderLeft}>
                    <img src={sunflower} alt="sf" />
                    <div className={style.Texts}>
                        <span className={style.smallText}>POWERED BY</span>
                        <span className={style.largeText}>Adobe Sign</span>
                    </div>
                </div>
                <div className={style.HeaderRight}>
                    <button className={style.FirstButton}>Engage</button>
                    <button className={style.SecondButton}>New ?</button>
                    <TooltipIcon styles={{paddingBottom: '.1rem'}} click={() => alert('open some modal')}/>
                </div>
            </div>

            <Navbar />
        </div>
    )
}

export default Header;