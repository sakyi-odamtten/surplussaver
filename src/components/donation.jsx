import style from './landingpage.module.css';
import { BsChatDots } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { BiPulse } from "react-icons/bi";
import logo from './logo.svg';
import SlideShow from './slideshow.jsx';
import { useState } from "react";
import HisTory from './history.jsx';
import ProFile from './profile.jsx';


const DoNation = () =>{
    const [click1, setclick1] =useState(false)
    const [click2, setclick2] =useState(false)
    const [click3, setclick3] =useState(false)
    const [click4, setclick4] =useState(false)
    const handleclickone = () =>{
        setclick1(!click1);
        setclick2(false);
        setclick3(false);
        setclick4(false);
    }
    const handleclicktwo = () =>{
        setclick1(false);
        setclick2(!click2)
        setclick3(false);
        setclick4(false);
    }
    const handleclickthree = () =>{
        setclick1(false);
        setclick2(false);
        setclick3(!click3);
        setclick4(false);
    }
    const handleclickfour = () =>{
        setclick1(false);
        setclick2(false);
        setclick3(false);
        setclick4(!click4);
    }
    
    return(
        <section className={style.dongrid}>
            <nav className={style.firstnav}>
                <img src={logo} alt="a pic of the logo" />
                <ul className={style.navul}>
                    <li><button onClick={handleclickone}><BsHouseDoor />  Dashboard</button></li>
                    <li><button onClick={handleclicktwo}><BsChatDots />  Message</button></li>
                    <li><button onClick={handleclickthree}><BsPerson />  Profile</button></li>
                    <li><button onClick={handleclickfour}><BiPulse />  History</button></li>
                    <li><button ><BiLogInCircle />  Sign out</button></li>
                </ul>
            </nav>
            <section className={style.donsec}>
                {click1 && <SlideShow/>}
                {click4 && <HisTory />}
                {click3 && <ProFile />}
            </section>
        </section>
    );
}

export default DoNation;