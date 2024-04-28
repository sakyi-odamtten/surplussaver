import style from './componet.module.css';
import { BsChatDots } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { BiPulse } from "react-icons/bi";

const NavStraight = () =>{
    return(
        <section className={style.navstr}>
            <ul className={style.navul}>
                <li><button><BsHouseDoor /> Dashboard</button></li>
                <li><button><BsChatDots /> Message</button></li>
                <li><button><BsPerson /> Profile</button></li>
                <li><button><BiPulse /> History</button></li>
                <li><button><BiLogInCircle /> Sign out</button></li>
            </ul>
        </section>
    )
}

export default NavStraight;