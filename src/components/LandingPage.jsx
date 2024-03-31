import React from 'react';
import style from './landingpage.module.css';
import logo from './logo.svg';
import imgone from './imgone.svg';

const LandingPage = () => {
    return (
        <>
            <header className={style.headd}>
                <img src={logo} alt="the organization's logo" />

                <ul className={style.uldesign}>
                    <li className={style.lione}>HOME</li>
                    <li>ABOUT US <i className={style.dropdown}></i></li>
                    <li>CONTACT US <i className={style.dropdown}></i></li>
                    <li>FAQ </li>
                </ul>
            </header>
            <section className={style.sectionone}>
                <div className={style.divone}>
                    <p className={style.divonep}>No waste</p>
                    <p className={style.divoneptwo}>Fighting Food <br />Insecurity Together</p>
                    <div className={style.divobuttons}>
                        <button className={style.buttonone}>Sign in</button>
                        <button className={style.buttontwo}>Sign up</button>
                    </div>
                </div>
                <div className={style.divoneimage}>
                    <img src={imgone} alt="a pic about food distribution" />
                </div>
            </section>
        </>
    )    
}
export default LandingPage