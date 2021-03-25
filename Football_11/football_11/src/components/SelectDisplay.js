import React from 'react';

const SelectDisplay = (props) =>{

    let {changeDisplay} = props;

    const formation = ["4-3-3","4-3-2-1","4-2-3-1","4-4-2","5-4-1"];
    
    

    // console.log("First :",{color,team});  

    

return (
    <>
    <label htmlFor="myDisplay">Change formation : </label>
    <select id='myDisplay' className="selector" onChange={changeDisplay}>
        {formation.map((item,i) => {

            return <option id={item} key={i} value={item} >{item}</option>})}
    </select>
    </>
)
}

export default SelectDisplay;
