import style from './componet.module.css';
import { Outlet, Link } from "react-router-dom";

const NavLink = () => {
    return (
        <>
            <ul className={style.uldesignd}>
                <li className={style.lioned}><Link to='/'className={style.faqlink}>HOME</Link></li>
                <li>ABOUT US <i className={style.dropdownd}></i></li>
                <li>CONTACT US <i className={style.dropdownd}></i></li>
                <li><Link to='/faq' className={style.faqlink}>FAQ </Link></li>
                <li><button className={style.buttonzerod}>Request Meal</button></li>
            </ul>
            <Outlet/>
        </>
    );
}

export default NavLink;