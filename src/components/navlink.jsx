import style from './componet.module.css';

const NavLink = () => {
    return (
        <>
            <ul className={style.uldesignd}>
                <li className={style.lioned}>HOME</li>
                <li>ABOUT US <i className={style.dropdownd}></i></li>
                <li>CONTACT US <i className={style.dropdownd}></i></li>
                <li>FAQ </li>
                <li><button className={style.buttonzerod}>Request Meal</button></li>
            </ul>
        </>
    );
}

export default NavLink;