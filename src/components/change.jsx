import React, { useRef } from 'react';
import style from './componet.module.css';
import SlideOne from './shots/SlideOne.svg';
import vegetables from './shots/vegetables.svg';
import giving from './shots/giving.svg';

const ChangeIt = () => {
    const content = [
        {buton:'Fight Hunger' ,pic:SlideOne, tittle:'Fight Hunger', contentt: 'We provide a seamless platform for restaurants and individuals to donate surplus food. Every meal donated through SurplusSaver goes directly to those in need, helping to combat hunger and malnutrition.', background:"#FE992D"},
        {buton:'Reduce Food Waste' ,pic:vegetables, tittle:'Reduce Food Waste', contentt:"By diverting surplus food from landfills, we're reducing harmful methane emissions and taking a step towards a greener, more sustainable future.", background:"#9A0A0D"},
        {buton:'Community Impact' ,pic:giving, tittle:'Community Impact', contentt:"Join us in making a tangible difference in our communities. Whether you're a restaurant with excess food or an individual wanting to contribute, SurplusSaver provides the platform to do so easily and efficiently.", background:"#FE992D"}
    ];
    const changedd = useRef(null);
    const changepicdd = useRef(null);
    const changetittledd = useRef(null);
    const changetextdd = useRef(null);
    const butone = useRef(Array(3).fill(null).map(() => React.createRef()));
    

    const handleclick = ({contindex}) =>{
        changedd.current.style.background = content[contindex].background;
        changepicdd.current.src = content[contindex].pic;
        changetittledd.current.textContent = content[contindex].tittle;
        changetextdd.current.textContent = content[contindex].contentt;

        butone.current.forEach(ref => {
            ref.style.background = '#FFFFFF';
            ref.style.color = '#FE992D';
        });
        butone.current[contindex].style.background = "#FE992D";
        butone.current[contindex].style.color = '#233607';
    }

    return (
        <div className={style.changed} >
                <button className={style.butchan} ref= { (el) => (butone.current[0] = el)}  onClick={() => handleclick({ contindex: 0 })}>Fight Hunger</button>
                <div className={style.inbuton} ref={ changedd }>
                    <img src={SlideOne} alt=" a pic of a lady eating" className={style.changepicd} ref={ changepicdd }/>
                    <div className={style.changecontend}>
                        <p className={style.changetittled} ref={changetittledd}>Fight Hunger</p>
                        <p className={style.changetextd} ref={changetextdd}> 
                            We provide a seamless platform for restaurants and individuals to donate surplus food.
                            Every meal donated through SurplusSaver goes directly to those in need, 
                            helping to combat hunger and malnutrition. 
                        </p>
                    </div>
                </div>
                <button className={style.butchan} ref= { (el) => (butone.current[1] = el)} onClick={() => handleclick({ contindex: 1 })}>Reduce Food Waste</button>
                <button className={style.butchan} ref= { (el) => (butone.current[2] = el)} onClick={() => handleclick({ contindex: 2 })}>Community Impact</button>
        </div>
    );
}

export default ChangeIt;