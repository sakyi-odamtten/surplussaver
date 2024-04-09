import { useState } from 'react';
import style from './componet.module.css'

const FaqForms = () => {
    const [inputs, setinputs] = useState({})

    const handlechange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        setinputs(values => ({...values, [name]: value}))
    }
    const handlesubmit = (event) =>{
        event.preventDefualt();
        alert(inputs);
    }

    return (
        <>
            <div className={style.form}>
                <p className={style.fap}>Contact Form</p>
                <form onSubmit={handlesubmit}>
                    <label > Name:
                        <br />
                        <input type="text" name='name' className={style.fiput}
                        value={inputs.name || ""} onChange={handlechange}/>
                    </label>
                    <br />
                    <label > Email:
                        <br />
                        <input type="text" name='email' className={style.fiput}
                        value={inputs.email || ""} onChange={handlechange}/>
                    </label>
                    <br />
                    <label > Message:
                        <br />
                        <input type="text" name='message' className={style.fiput}
                        value={inputs.message || ""} onChange={handlechange}/>
                    </label>
                    <br />
                    <input type="submit" className={style.buttonzerod}/>

                </form>
            </div>
        </>
    )
}
export default FaqForms;