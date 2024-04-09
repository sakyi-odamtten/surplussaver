import style from './componet.module.css';
import {MdOutlineMenu} from 'react-icons/md';
import { useState } from "react";
import NavLink from './navlink.jsx';
import {MdClose} from 'react-icons/md';


const HamBurger = () => {
    const [click, setclick] = useState(false);

    const Hamburger = <MdOutlineMenu className="HamburgerMenu"
            size="30px" 
            color="black"
            onClick={() => setclick(!click)} 
    />;
    const Close = <MdClose className="HamburgerMenu"
            size="30px" color="black"
           onClick={() => setclick(!click)} />
    return (
        <div className={style.headdivd } >
            { click ? Close : Hamburger}
            {click && <NavLink />}
            
        </div>
    );
}
export default HamBurger;