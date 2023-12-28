import React,{useState} from 'react';
import "./style.css";
import Logo from '../../assets/Media/ShipUp.png'
import Modal from 'react-modal';

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='header-parent-wrapper container-xl'>
      <nav className='d-flex justify-content-between align-items-center'>
        <div className='logo'>
          <img src={Logo}/>
        </div>
        <div className='ham' onClick={openModal}>
          <p className='menu-line'/>
          <p className='menu-line'/>
          <p className='menu-line'/>
          </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: '',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      height:"100vh",
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'hidden',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
    }
  }}
  >
    <p onClick={closeModal} className='close-modal-btn'>Close</p>

       <ul className='d-flex gap-4'>
        <div  className="dropdown">
          <li className='btn-secondary  dropdown-toggle'>Company</li>
          <ul class="dropdown-content">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
        </div>
          <li>Service</li>
          <li>Solutions</li>
          <li>Industries</li>
          <li>Insights</li>
          <li>News and Media</li>
        </ul>
        <div className='d-flex gap-4'>
          <button className='btn'>Reuest Quote</button>
          <button className='btn active'>Join Now</button>
        </div>
      </Modal>
       <div className='col-center'>
       <ul className='d-flex gap-4'>
        <div  className="dropdown">
          <li className='btn-secondary  dropdown-toggle'>Company</li>
          <ul class="dropdown-content">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
        </div>
          <li>Service</li>
          <li>Solutions</li>
          <li>Industries</li>
          <li>Insights</li>
          <li>News and Media</li>
        </ul>
       </div>
        <div className='left-col d-flex gap-4 hide'>
          <button className='btn'>Reuest Quote</button>
          <button className='btn active'>Join Now</button>
        </div>
      </nav>
    </div>
  )
}
