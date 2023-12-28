import React, { useState } from 'react';
import "./style.css";
import Herobanner from '../../assets/Media/herobanner.png';
import banner from '../../assets/Media/bgimg.png';
import Playdemo from '../../assets/Media/playdemo.png';
import Form from '../Form';
import Modal from 'react-modal';


const myStyle = {
  backgroundImage:`url('${banner}')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export default function LandingPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container-xxl text-center align-items-center justify-content-center padding" >
    <div className="row" style={myStyle}>
    <div className="col center-content" >
       <h2>quick & reliable <strong className='active-text'>warehousing and logistics</strong> solution.</h2>
       <p>ShipUp delivers an unparalleled customer service through 
        dedicated customer teams, engaged people working in an agile culture,
         and a global footprint
         </p>   
         <div className='left-col d-flex gap-4'>
          <button className='btn active'>Join Now</button>
         <div className='demo-btn'>
         <img src={Playdemo} onClick={openModal}/>
         <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="YouTube Video"
      >
             <button onClick={closeModal} className='close-btn'>Close</button>
        <iframe width="100%" height="90%" src="https://www.youtube.com/embed/tgbNymZ7vqY">

      </iframe> 
      </Modal>
         </div>
        </div>
    </div>
    <div className="col">
    <img src={Herobanner}/>
    </div>
  </div>
  <Form/>                                                                                                                                                                            
</div>
  )
}
