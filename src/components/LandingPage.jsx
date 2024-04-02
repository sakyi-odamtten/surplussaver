import React, { useRef } from 'react';
import style from './landingpage.module.css';
import logo from './logo.svg';
import imgone from './imgone.svg';
import SlideOne from './shots/SlideOne.svg';
import vegetables from './shots/vegetables.svg';
import giving from './shots/giving.svg';
import Donation from './shots/Donation.svg';
import HandShake from './shots/HandShake.svg';
import Volunteer from './shots/Volunteer.svg';

const LandingPage = () => {
    const content = [
        {pic:SlideOne, tittle:'Fight Hunger', contentt: 'We provide a seamless platform for restaurants and individuals to donate surplus food. Every meal donated through SurplusSaver goes directly to those in need, helping to combat hunger and malnutrition.', background:"#FE992D"},
        {pic:vegetables, tittle:'Reduce Food Waste', contentt:"By diverting surplus food from landfills, we're <br />reducing harmful methane emissions and<br /> taking a step towards a greener, more <br />sustainable future.", background:"#9A0A0D"},
        {pic:giving, tittle:'Community Impact', contentt:"Join us in making a tangible difference in our <br />communities. Whether you're a restaurant with<br /> excess food or an individual wanting to <br />contribute, SurplusSaver provides the platform<br /> to do so easily and efficiently.", background:"#FE992D"}
    ];
    
    const changet = useRef(null);
    const changepict = useRef(null);
    const changetittlet = useRef(null);
    const changetextt = useRef(null);
    const buton = useRef(Array(3).fill(null).map(() => React.createRef()));

    function handleClick({contindex}){
        const maindiv = changet.current;
        maindiv.style.background = content[contindex].background;
        const piceeone = changepict.current;
        piceeone.src = content[contindex].pic;
        const tite = changetittlet.current;
        tite.textContent = content[contindex].tittle;
        const text = changetextt.current;
        text.innerHTMl = content[contindex].contentt;
        
        buton.current.forEach(ref => {
            ref.style.background = '#FFFFFF';
            ref.style.color = '#FE992D';
        });

        buton.current[contindex].style.background = "#FE992D";
        buton.current[contindex].style.color = '#233607';
    };

    return (
        <>
            <header className={style.headd}>
                <img src={logo} alt="the organization's logo" />

                <div>
                    <ul className={style.uldesign}>
                        <li className={style.lione}>HOME</li>
                        <li>ABOUT US <i className={style.dropdown}></i></li>
                        <li>CONTACT US <i className={style.dropdown}></i></li>
                        <li>FAQ </li>
                    </ul>
                    <button className={style.buttonzero}>Request Meal</button>
                </div>
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
                    <button className={style.buttonthree} onClick={() => handleClick({ contindex: 0 })} ref= { (el) => (buton.current[0] = el) }>Fight Hunger</button>
                    <button className={style.buttonthree} onClick={() => handleClick({ contindex: 1 })} ref= { (el) => (buton.current[1] = el) }>Reduce Food Waste</button>
                    <button className={style.buttonthree} onClick={() => handleClick({ contindex: 2 })} ref= { (el) => (buton.current[2] = el) } >Community Impact</button>
                </div>
                <div className={style.change} ref={ changet }>
                    <img src={SlideOne} alt=" a pic of a lady eating" className={style.changepic} ref={ changepict }/>
                    <div className={style.changecontent}>
                        <p className={style.changetittle} ref={changetittlet}>Fight Hunger</p>
                        <p className={style.changetext} ref={changetextt}>
                            We provide a seamless platform for restaurants and individuals to donate surplus food.
                            Every meal donated through SurplusSaver goes directly to those in need, 
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