import React from 'react';
import C10 from "../photo/download.jpg";
import C9 from '../photo/download (1).jpg';
import '../style/blog.css';

function Blog() {
  return (
    <>
    <div className='blog1'>
     <div className='blog2'>
        <img src={C10} className='im8'/>
        <img src={C10} className='im8'/>
        <img src={C10} className='im8'/>
        <img src={C10} className='im8'/>
     </div>

    </div>
<div className='blog3'>
    <div className='blog4'>
        <h1 className='h1'>SEE WHAT WE CAN DO FOR YOU</h1>
        <h3 className='h3'>Schedule Your First Meeting</h3>
        <p className='h4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem 
ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
sometimes by accident, sometimes on purpose (injected humour and the like)</p>
<button>Schedule</button>
    </div>

</div>

<div className='blog8'>
<div className="card cd" >
  <img className="card-img-top im6" src={C9} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title g">Card title</h5>
    <p className="card-text g1">Some quick example text to build on the card title and make up the bulk of the card's content.
    Many desktop publishing 
packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem 
ipsum' will uncover many web sites still in their infancy.</p>
  </div>
</div>
<div className="card cd" >
  <img className="card-img-top im6" src={C9} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title g">Card title</h5>
    <p className="card-text g1">Some quick example text to build on the card title and make up the bulk of the card's content.
    Many desktop publishing 
packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem 
ipsum' will uncover many web sites still in their infancy. </p>
  </div>
</div>
<div className="card cd" >
  <img className="card-img-top im6" src={C9} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title g">Card title</h5>
    <p className="card-text g1">Some quick example text to build on the card title and make up the bulk of the card's content.
    Many desktop publishing 
packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem 
ipsum' will uncover many web sites still in their infancy. </p>
  </div>
</div>
</div>

    </>
    
  )
}

export default Blog