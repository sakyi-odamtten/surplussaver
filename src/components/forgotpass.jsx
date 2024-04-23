import style from './componet.module.css';
import logo from './logo.svg';
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from 'react';
import facebook from './shots/facebook.svg';
import google from './shots/google.svg';
import personnal from './shots/personnal.svg';
import { Outlet, Link } from "react-router-dom";
import shortline from './shots/shortline.svg';
import personal1 from './shots/personal1.svg';

const ForgotPassword = () =>{
    const arrow = <FaAngleLeft className={style.leftarrow}/>

    const [inputf, setinputf] = useState({});
    const handlechangef = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setinputf(values => ({...values, [name]: value }))
    }
    const handlesubmit = (event) =>{
        event.preventDefault();
        alert(inputf);
    }
    return (
        <section className={style.fpsec}>
            <img src={logo} alt="the organization's logo" className={style.tyimg} />
            <div className={style.fflexp}>
                <img src={personnal} alt="a forgot pic" className={style.fppic} />
                <img src={personal1} alt="a forgot pic" className={style.under} />
                <div className={style.dformp}>
                    <p className={style.fpp}>{arrow} Forgot Password</p>
                    <form onSubmit={handlesubmit}>
                        <label>
                            <p className={style.cnone}>Enter Email Address</p>
                            <input type="text" placeholder='Email Address' name = 'email' 
                             className={style.fpinputs} value={inputf.email || ""}
                              onChange={handlechangef}/>
                        </label>
                        <br />
                        <Link  to='/signup' className={style.fplink}>Back to sign in</Link>
                        <br />
                        <input type="submit" value="Send" className={style.fpsub} />
                    </form>
                    <p className={style.fppone}><img src={shortline} alt="a line" />Or sign up with <img src={shortline} alt="a line" /></p>
                    <img src={google} alt="a social pic" className={style.gole} />
                    <img src={facebook} alt="a social pic" className={style.fab} />
                    <p className={style.fpptwo}>Don’t have an account? <Link to="/signup" className={style.fplinkp}>Sign up</Link></p>
                </div>
            </div>
            <Outlet />
        </section>
    );
}

export default ForgotPassword;