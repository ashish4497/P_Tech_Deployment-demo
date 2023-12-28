import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import Sign from '../../assets/Media/ShipUpfooter.png';
import Fb from '../../assets/Media/fb.png';
import Insta from '../../assets/Media/ins.png';
import Twitter from '../../assets/Media/tw.png';
import Watsapp from '../../assets/Media/wats.png';
import footerIcon from '../../assets/Media/ngfooter.png'

export default function index() {
  return (
  <div className='footer-c'>
    <div className='container-xl' >
      <div className='row'>
        <div className='col'>
          <img  className="ship-up" src={Sign}/>
          <p>ShipUp delivers an unparalleled customer service through 
            dedicated customer teams, engaged people working in an agile culture,
            and a global footprint
         </p> 
        </div>
        <div className='col'>
          <h3>Explore</h3>
          <ul>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Our warehoueses</Link></li>
            <li><Link to="#">Blogs</Link></li>
            <li><Link to="#">News and Media</Link></li>
          </ul>
        </div>
        <div className='col'>
          <h3> Legal</h3>
          <ul>
          <li><Link to="#">Terms</Link></li>
            <li><Link to="#">Privacy</Link></li>
          </ul>
        </div>
        <div className='col'>
          <h3>Socila Media</h3>
          <div className='social-icon'>
            <Link to="#"><img src={Fb}/></Link>
            <Link to="#"><img src={Twitter}/></Link>
            <Link to="#"><img src={Watsapp}/></Link>
            <Link to="#"><img src={Insta}/></Link>           
          </div>
        </div>
    </div>
    <div className='continer horizantal-bar'></div>
    <div className='footer-logo'>
      <img src={footerIcon}/>
    </div>
  </div>
  </div>
  )
}
