import React from 'react';
import style from './landingpage.module.css';
import logo from './logo.svg';
import imgone from './imgone.svg';
import SlideOne from './shots/SlideOne.svg';
import vegetables from './shots/vegetables.svg';
import giving from './shots/giving.svg';
import Donation from './shots/Donation.svg';
import HandShake from './shots/HandShake.svg';
import Volunteer from './shots/Volunteer.svg';

const content = [
    {pic:SlideOne, tittle:'Fight Hunger', content: 'We provide a seamless platform for <br />restaurants and individuals to donate surplus<br /> food. Every meal donated through <br />SurplusSaver goes directly to those in need, <br />helping to combat hunger and malnutrition.', background:"#FE992D"},
    {pic:vegetables, tittle:'Reduce Food Waste', content:"By diverting surplus food from landfills, we're <br />reducing harmful methane emissions and<br /> taking a step towards a greener, more <br />sustainable future.", background:"#9A0A0D"},
    {pic:giving, tittle:'Community Impact', content:"Join us in making a tangible difference in our <br />communities. Whether you're a restaurant with<br /> excess food or an individual wanting to <br />contribute, SurplusSaver provides the platform<br /> to do so easily and efficiently.", background:"#FE992D"}
];
const contindex = 0;
const LandingPage = () => {
    const rotcontent = document.getElementsByClassName("change");
    function rotatet () {
        //pass
    }
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
            <section className={style.sectiontwo}>
                <p className={style.initiate}>
                    Our Initiatives
                </p>
                <div className={style.divtbuttons}>
                    <button className={style.buttonthree}>Fight Hunger</button>
                    <button className={style.buttonthree}>Reduce Food Waste</button>
                    <button className={style.buttonthree}>Community Impact</button>
                </div>
                <div className={style.change}>
                    <img src={SlideOne} alt=" a pic of a lady eating" className={style.changepic}/>
                    <div className={style.changecontent}>
                        <p className={style.changetittle}>Fight Hunger</p>
                        <p className={style.changetext}>
                            We provide a seamless platform for <br />restaurants and individuals to donate surplus <br /> food.
                            Every meal donated through <br />SurplusSaver goes directly to those in need, <br />
                            helping to combat hunger and malnutrition. 
                        </p>
                    </div>
                </div>
                <p className={style.initiate}>Why Surplus Saver</p>
                <div className={style.bakpic}>
                    <div className={style.backone}>
                        <p className={style.cred}>Innovative <br />Approach</p>
                        <p className={style.backtext}>
                            Our platform leverages <br />technology to streamline the <br />donation process, 
                            ensuring that <br />surplus food reaches those who <br /> need it most.
                        </p>
                    </div>
                    <div className={style.backtwo}>
                        <p className={style.cred}>Environmental <br />Focus</p>
                        <p className={style.backtext}>
                            By reducing food waste, we're not <br /> just fighting hunger; 
                            we're also <br /> contributing to environmental <br /> sustainability 
                            and combating <br /> climate change.
                        </p>
                    </div>
                    <div className={style.backtwo}>
                        <p className={style.cred}>Empowering <br />Communities</p>
                        <p className={style.backtext}>
                            SurplusSaver empowers individuals <br /> and businesses to take 
                            action <br /> against food waste and hunger. <br />Together, 
                            we're creating a positive <br /> impact on both the lives of those in <br /> need 
                            and the health of our planet.
                        </p>
                    </div>
                </div>
                <p className={style.initiate}>How We Do It</p>
                <div className={style.goabout}>
                    <div className={style.goaboutone}>
                        <img src={HandShake} alt="a hand shake" />
                        <div className={style.gosub}>
                            <p className={style.goabouttittle}>Partnership</p>
                            <p className={style.goabouttext}>
                                Through collaborative efforts,
                                we <br />create lasting impact in <br />communities worldwide.
                            </p>
                        </div>
                    </div>
                    <div className={style.goaboutone}>
                        <img src={Volunteer} alt=" a person volunteering" />
                        <div className={style.gosub}>
                            <p className={style.goabouttittle}>Volunteering</p>
                            <p className={style.goabouttext}>
                                volunteers play a vital role in <br /> making a difference.
                            </p>
                        </div>
                    </div>
                    <div className={style.goaboutone}>
                        <img src={Donation} alt="a donation box" />
                        <div className={style.gosub}>
                            <p className={style.goabouttittle}>Donation</p>
                            <p className={style.goabouttext}>
                                 Restaurants and individuals can <br /> easily donate surplus food 
                                 through <br />our platform. Every donation <br /> counts. </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )    
}
export default LandingPage