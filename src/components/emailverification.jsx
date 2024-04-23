import style from './componet.module.css';
import email from './shots/email.svg';


const EmailVerification = () =>{
    return(
        <div className={style.emaildiv}>
            <div className={style.emailback}>
                <img src={email} alt="an email log" className={style.emailimg}/>
                <p className={style.emailpone}>Verify Your Email</p>
                <p className={style.emailp}>We sent a verification email to</p>
                <p className={style.emailpsend}></p>
                <p className={style.emailp}>Check your email and click on the verification link to continue or</p>
            </div>
            <button type='submit' className={style.emaibutton}>Verify Email</button>
        </div>
    );
}

export default EmailVerification;