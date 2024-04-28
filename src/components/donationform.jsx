import { FaAngleLeft } from "react-icons/fa6";
import { BiSquare } from "react-icons/bi";
import style from './componet.module.css';
import { useState, useRef } from 'react';
//import axios from 'axios';

const DonationForm = () =>{
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
        <div>
            <p className={style.dfp}><FaAngleLeft className={style.dfarrow}/> DONATION FORM</p>
            <div>
                <form onSubmit={handlesubmit}>
                    <div className={style.formflex}>
                        <div>
                            <label >
                                <select name="selectedcategory" value={inputs.selectedCategory || ""} onChange={handlechanges} className={style.fpinputs}>
                                    <option value="">What are you donating</option>
                                    <option value="food">food</option>
                                    <option value="cash">cash</option>
                                </select>
                            </label>
                        
                            <br />
                            <br />
                            <label >
                                <input type="text" placeholder="Amount"  name="amount" className={style.fpinputs} value={inputs.amount || ""}
                                onChange={handlechanges} />
                            </label>
                            <br />
                            <br />
                            <label >
                                <input type="date" placeholder="Expiry date"  name="expirydate" className={style.fpinputs} value={inputs.expirydate || ""}
                                onChange={handlechanges} />
                            </label>
                            <br />
                            <br />
                            <label >
                                <select name="selectedcategory" value={inputs.selectedCategory || ""} onChange={handlechanges} className={style.fpinputs}>
                                    <option value="">Select a food bank nearby</option>
                                    <option value="food">food</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label >
                                <select name="selectedcategory" value={inputs.selectedCategory || ""} onChange={handlechanges} className={style.fpinputs}>
                                    <option value="">Type of food</option>
                                    <option value="raw">Raw</option>
                                    <option value="fruits">Fruits</option>
                                    <option value="vegetables">Vegetables</option>
                                    <option value="cooked">Cooked</option>
                                    <option value="provisions">Provisions</option>
                                </select>
                            </label>
                            <br />
                            <br />
                            <label >
                                <input type="text" placeholder="Quantity of food in kg"  name="quantity" className={style.fpinputs} value={inputs.quantity || ""}
                                onChange={handlechanges} />
                            </label>
                            <br />
                            <br />
                            <label >
                                <p><BiSquare /> Pick up  <BiSquare /> Drop off</p>
                            </label>
                            <p className={style.empety} ref={epty}></p>
                        </div>
                    </div>
                    <input type="submit" className={style.fpsub}/>
                </form>
            </div>
        </div>
    );
}
export default DonationForm;