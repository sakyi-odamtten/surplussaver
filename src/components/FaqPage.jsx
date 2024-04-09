import style from './landingpage.module.css';
import HamBurger from './HamBurger.jsx';
import Footer from './Footer/Footer.jsx';
import logo from './logo.svg'; 
import { GrAdd } from "react-icons/gr";
import line from './shots/line.svg';
import React, { useState, useRef } from 'react';
import FaqForms from './faqform.jsx';

const FaqPage = () => {
    const pluss = useRef(Array(10).fill(null).map(() => React.createRef()));
    const text = [{question: " What is SurplusSaver? ", faq:'SurplusSaver is a platform dedicated to reducing food waste and addressing food insecurity. We connect restaurants, individuals, and organizations with surplus food to those in need, creating a more sustainable and equitable food system.'},
                   {question: 'How does SurplusSaver work?', faq: 'Restaurants and individuals can donate surplus food through our platform. This food is then distributed to partner organizations such as food banks, shelters, and community centers. Users can also request food assistance or volunteer to help with distribution.'},
                   {question: 'Who can donate food?', faq: 'Any restaurant, catering service, grocery store, or individual with surplus food can donate through SurplusSaver. We accept a wide range of food items, from fresh produce to packaged goods.'},
                   {question: 'How can I request food assistance?', faq: 'If you are in need of food assistance, you can create an account on our platform and submit a request. Our team will review your request and connect you with available resources in your area.'},
                   {question: 'Can I volunteer with SurplusSaver? ', faq: 'Yes! We welcome volunteers who are passionate about fighting food waste and hunger. Volunteers can help with food distribution, community outreach, fundraising events, and more. Sign up on our website to get involved.'},
                   {question: 'What types of organizations benefit from SurplusSaver?', faq: 'Our partner organizations include food banks, homeless shelters, schools, community centers, and other non-profits focused on food security. These organizations receive donated food and distribute it to those in need.'},
                   {question: 'How does SurplusSaver ensure food safety?  ', faq: 'We work closely with our partner organizations to ensure that all donated food meets safety and quality standards. Our platform provides guidelines for handling and storing food safely.'},
                   {question: 'Can I donate cash? ', faq: 'Yes, if you are unable to donate food but still want to contribute, cash donations are accepted. Click on the donation button and follow the cash donation process.'},
                   {question: 'How can my organization become a SurplusSaver partner? ', faq: 'If your organization is interested in becoming a SurplusSaver partner, please contact us through our website. We are always looking to expand our network of partners dedicated to fighting food waste and hunger.'},
                   {question: 'Have more questions?', faq: "Feel free to reach out to us through our contact page. We're here to help!"}];
const [click, setClick] = useState(Array(10).fill(false));

const handle = (index) => {
    const newClickState = [...click];
    newClickState[index] = !newClickState[index];
    setClick(newClickState);
}

    return(
        <>
            <header className={style.headd}>
                <img src={logo} alt="the organization's logo" />

                <div className={style.headdiv } >
                    <ul className={style.uldesign}>
                        <li className={style.lione}>HOME</li>
                        <li>ABOUT US <i className={style.dropdown}></i></li>
                        <li>CONTACT US <i className={style.dropdown}></i></li>
                        <li>FAQ </li>
                    </ul>
                    <button className={style.buttonzero}>Request Meal</button>
                </div>
                <div className={style.hambaby}>
                    <HamBurger />
                </div>
                
            </header>
            <section className={style.sectiononen}>
                <div className={style.fp}>
                    <p >Frequently <br /> Asked Questions</p>
                </div>                
            </section>
            <section className={style.sectiontwo}>
                {text.map((item, index) => (
                    <div key={index} className={style.faqdisplay}>
                        <img src={line} alt="a line" className={style.liness} />
                        <p className={style.faqp} onClick={() => handle(index)}>
                            {item.question}
                            <GrAdd className={style.plas} />
                        </p>
                        {click[index] && <p className={style.odip}>{item.faq}</p>}
                    </div>
                ))}
            </section>
            <section className={style.adoutdamn}>
                <p className={style.lasp}>Feel free to reach <br />out to us through <br />the contact form</p>
                <div className={style.contactform}>
                    <FaqForms />
                </div>
            </section>
            <div className={style.otet}>
                <FaqForms />
            </div>            
            <Footer />
        </>
    );
}

export default FaqPage;