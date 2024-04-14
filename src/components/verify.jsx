import style from './componet.module.css';
import logo from './logo.svg';
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from 'react';
import padlock from './shots/padlock.svg';
import { Outlet, Link } from "react-router-dom";

const VeriFy = () =>{
    const arrow = <FaAngleLeft className={style.leftarrow}/>

    const [inputv, setinputv] = useState({});
    const handlechangev = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setinputv(values => ({...values, [name]: value }))
    }
    const handlesubmit = (event) =>{
        event.preventDefualt();
        alert(inputv);
    }
    return (
        <section className={style.fpsec}>
            <img src={logo} alt="the organization's logo" className={style.tyimg} />
            <div className={style.fflexp} >
                <img src={padlock} alt="a padlock pic" className={style.fppic}/>
                <div className={style.dformp}>
                    <p className={style.fpp}>{arrow} Verify Code</p>
                    <form onSubmit={handlesubmit}>
                        <label>
                            An authentication code has been sent to your email.
                            <br />
                            <br />
                            <input type="text" placeholder='enter code' name = 'verificationcode' 
                             className={style.fpinputs} value={inputv.name || ""}
                             onChange={handlechangev}/>
                        </label>
                        <p className={style.fpptwot}>Didn’t receive a code? <Link className={style.fplinkp}> Resend</Link></p>
                        <input type="submit" value='Verify' className={style.fpsub} />
                    </form>
                </div>
            </div>
            <Outlet />
        </section>
    )
}

export default VeriFy;