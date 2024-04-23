import style from './componet.module.css';
import logo from './logo.svg';
import { useState, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import shortline from './shots/shortline.svg';
import facebook from './shots/facebook.svg';
import google from './shots/google.svg';
import hand from './shots/hand.svg';
//import axios from 'axios';

const SignIn = () =>{
    const [inputs, setinputs] = useState({});
    const epty = useRef(null);
    const handlechanges = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setinputs({...inputs, [name]: value })
    }
    const handlesubmit = (event) =>{
        event.preventDefault();
        console.log(inputs)
        const formdata = new FormData(event.currentTarget);
        console.log(formdata);
        const data = Object.fromEntries(formdata);
        const isEmpty = Object.values(data).some(value => value === '');
        if (isEmpty){
            console.log('empty space available');
            epty.current.textContent = 'there is an empty space please fill';
            return;
        }
        /*if(data.confirm !== data.password){
            console.log("password does not match");
            epty.current.textContent = 'Password does not match';
        }else{
            axios.post('endpoint',{data})
                .then(response => {
                    console.log(response)
                    event.currentTarget.reset();
                })
                .catch(err => (console.log(err)))
        }*/
        console.log(data);
        console.log("okay")
        setinputs({});
    }
    return (
        <section className={style.fpsec}>
            <img src={logo} alt="the organization's logo" className={style.tyimg} />
            <div className={style.fflexp}>
                <div className={style.handshake}>
                    <img src={hand} alt="hand shake" />
                </div>
                <div className={style.dformp}>
                    <p className={style.fpp}>Welcome Back!</p>
                    <p className={style.sp}>Let’s fight food insecurity together</p>
                    <form onSubmit={handlesubmit}>
                        <label >
                            <select name='selectedCategory'  value={inputs.selectedCategory || ""} className={style.fpinputs} onChange={handlechanges}>
                                <option value="">Select Category</option>
                                <option value="donate">Donate</option>
                                <option value="institution">Institution</option>
                                <option value="individual">Individual</option>
                            </select>
                        </label>
                        <br />
                        <br />
                        
                        <label >
                            <input type="text" placeholder='Email Address' name = 'email' 
                             className={style.fpinputs} value={inputs.email|| ""}
                              onChange={handlechanges}/>
                        </label>
                        <br />
                        <br />
                        <label >
                            <input type="password" placeholder='Atleast 8 Characters'name = 'password' 
                             className={style.fpinputs} value={inputs.password || ""}
                              onChange={handlechanges}/>
                        </label>
                        <br />
                        <p className={style.empety} ref={epty}></p>
                        <br />
                        <input type="submit" value= 'sign Up' className={style.fpsub}/>
                    </form>
                    <p className={style.fpptwos}><img src={shortline} alt="a line" />Or sign up with <img src={shortline} alt="a line" /></p>
                    <img src={google} alt="a social pic" className={style.gole} />
                    <img src={facebook} alt="a social pic"  />
                    <p className={style.fpptwo}>Don’t have an account? <Link to ='/signup' className={style.fplinkp}>Sign up</Link></p>
                </div>

            </div>
            <Outlet />
        </section>
    );
}

export default SignIn;