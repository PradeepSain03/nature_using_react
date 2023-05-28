import React from 'react';
import '../style/about.css';
import C1 from '../photo/images (1).jpg';
import C2 from '../photo/images.jpg';
import C3 from '../photo/dd5065e32afde6ba964e4695c9eb902e.jpg';
import C4 from '../photo/cropped-logo-VE-300x300.jpg';
import C5 from '../photo/images (2).jpg'
function About() {
    return (
        <>
            <div className='about'>
                <div className='about1'>
                    <p className='para1'>
                        <span>Efficient Energy -</span>
                        The Way it Should Be.
                    </p>
                </div>


                <div className='d'>
                    <div class="card">
                        <img src={C1} alt="Avatar" className='img2' />
                        <div class="container">
                            <h4><b>Carbon</b></h4>
                            <p>Nature has been in existence long before humans and ever since it has taken care of mankind and nourished it forever.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={C2} alt="Avatar" className='img2' />
                        <div class="container">
                            <h4><b>Carbon</b></h4>
                            <p>Nature has been in existence long before humans and ever since it has taken care of mankind and nourished it forever.</p>
                        </div>
                    </div>
                </div>


                <div className='d'>
                    <div class="card">
                        <img src={C3} alt="Avatar" className='img2' />
                        <div class="container">
                            <h4><b>Carbon</b></h4>
                            <p>Nature has been in existence long before humans and ever since it has taken care of mankind and nourished it forever.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={C4} alt="Avatar" className='img2' />
                        <div class="container">
                            <h4><b>Carbon</b></h4>
                            <p>Nature has been in existence long before humans and ever since it has taken care of mankind and nourished it forever.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about22'>
                <div className='about2'>
                    <div className='aboutxt'>
                        <h1>Energy Supply</h1>
                        <h1>Solution For</h1>
                        <h1>Residency.</h1>
                        <p className='aboutxt1'>it offers us a protective layer which guards us against all kinds of damages and harms. Survival of mankind without nature is impossible and humans need to understand that.</p>

                    </div>
                    <div className='aboutimg'>
                        <img src={C5} className='img3' />

                    </div>
                </div>
            </div>

            <div className='about3'>
                <h1 className='up'>Upcoming  Launch</h1>
                <div className='about2'>
                    <div className='aboutxt2'>
                        <h1>Energy Calculator</h1>
                        <p className='aboutxt3'>it offers us a protective layer which guards us against all kinds of damages and harms. Survival of mankind without nature is impossible and humans need to understand that.
                            it offers us a protective layer which guards us against all kinds of damages and harms. Survival of mankind without nature is impossible and humans need to understand that.
                        </p>
                        <button className='butt'>Get A Quote</button>

                    </div>
                    <div className='aboutimg'>
                        <img src={C5} className='img3' />

                    </div>
                </div>
            </div>
        </>

    )
}

export default About;