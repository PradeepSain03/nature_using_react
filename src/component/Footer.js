import React from 'react'
import '../style/footer.css';
import C11 from "../photo/cropped-logo-VE-300x300.jpg";

function Footer() {
  return (
    <>
  <div className='footer'>
    <div className='footer1'>
        <img src={C11} className='c11'/>
        <p className='Foop'>
        It is a long established fact that a 
reader will be distracted by the 
readable content of a page when 
looking at its layout
        </p>
        <h1>SOCIAL LINKS</h1>
    </div>

    <div className='footer2'>
        <h1>QUICK LINK</h1>
       <li>Home</li>
       <li>About us</li>
       <li>Testimonial</li>
       <li>Blog</li>
       <li>our team</li>
       <li>Careers</li>
        <h1>SOCIAL LINKS</h1>
    </div>

    <div className='footer3'>
        <h1>SERVICES</h1>
       <li>Energy Calculation</li>
       <li>Energy Demand Management</li>
       <li>Energy Supply Solution</li>
       <li>Renewable Energy Solution</li>
       <li>Reduce Energy Bills</li>
       <li>Energy Saving</li>
        <h1>SOCIAL LINKS</h1>
             <div className='social'>
                      <button type="button" class="btn btn-social-icon btn-outline-facebook"><i class="fa fa-facebook"></i></button>
                       <button type="button" class="btn btn-social-icon btn-outline-linkedin"><i class="fa fa-linkedin"></i></button>
                        <button type="button" class="btn btn-social-icon btn-outline-instagram"><i class="fa fa-instagram"></i></button>
                      <button type="button" class="btn btn-social-icon btn-outline-twitter"><i class="fa fa-twitter"></i></button>
             </div>
    </div>
      
    <div className='footer3'>
        <h1>CONTACTS</h1>
      <div className='Contact1'>
        <span class="bi bi-geo"></span>
        <h4>31 Steeplebush Ave Unit 1
Brampton, ON L6R 3B4</h4>
      </div>
      <div className='Contact2'>
    
        <h4>contact@vedicenergie.com  <span className="bi bi-envelope p"></span></h4>
      </div>
      <div className='Contact3'>
       <i className="bi bi-telephone"></i>
        <h4>+91 98439 37773</h4>
      </div>
    </div>
  </div>
</>
  )
}

export default Footer