import style from './landingpage.module.css';
import React, { useState, useEffect, useRef } from 'react';
import pic1 from './shots/pic1.svg';
import pic2 from './shots/pic2.svg';
import pic3 from './shots/pic3.svg';
import DonationForm from './donationform.jsx';

const SlideShow = () =>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [click, setclick] = useState(false);
    const pic = [pic1, pic2, pic3];
    const picy = useRef(null);
    const buty = useRef(null);
    const handleclick =()=>{
        picy.current.style.display = 'none';
        buty.current.style.display = 'none';
        setclick(!click);        
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex(prevIndex => (prevIndex + 1) % pic.length);
        }, 30000);         
        return () => clearInterval(intervalId); 
    }, [pic.length]);
    return(
        <div className={style.slidepic}>
            <img src={pic[currentImageIndex]} alt="pic on slide show" ref={picy} />
            <button className={style.slidebut} onClick={handleclick} ref={buty}>Donate</button>
            {click && <DonationForm/>}
        </div>
    );
}

export default SlideShow;