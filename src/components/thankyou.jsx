import style from './componet.module.css';
import thank from './shots/thank.svg';
import you from './shots/you.svg';
import logo from './logo.svg';

const ThankYou = () => {
    return (
        <section className={style.tback}>
            <img src={logo} alt="the organization's logo" className={style.tyimg} />
           <div className={style.tflex}>
                <div className={style.tbox}>
                    <img src={thank} alt="a text" className={style.tyou} />
                    
                    <img src={you} alt="a text" className={style.tyou}/>
                    <p className={style.tred}>Welcome to SurplusSaver</p>

                    <button type='submit' className={style.tbutton}>Continue</button>
                </div>
           </div>
        </section>
    );
}

export default ThankYou;