import React from 'react';
import './style.css';
import LocIcon from '../../assets/Media/Location.png'


const inputIcon = {
  backgroundImage:`url('${LocIcon}')`,
  backgroundSize: "",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "10px 18px",
  paddingLeft:"10px"
}

export default function index() {
  return (
    <div className='form-container container'>
        <form className='d-flex justify-content-around'>
       
         <div className='input-container'>
            <label className='location'>location</label>
           <input type="text" placeholder='Enter location'
            style={inputIcon}
           />
          </div>
        
           
          <div className='input-container'>
            <label className='location'>location</label>
           <input type="text" placeholder='Enter location'
            style={inputIcon}
           />
          </div>
          
          <div className='input-container'>
            <label className='location'>location</label>
           <input type="text" placeholder='Enter location'
            style={inputIcon}
           />
          </div>
          <button className='btn active'>Check Price</button>
        </form>
    </div>
  )
}
