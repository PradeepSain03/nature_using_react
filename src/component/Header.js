import React  from 'react';
import logo from '../photo/cropped-logo-VE-300x300.jpg';
import '../style/header.css';

function Header() {
    return (
        <>
        <div className='Head'>
            <div className='Head1'>
            <img src={logo} className='img'/>
            <nav className='nav'>
                <li><a href='#home' >Home</a></li>
                <li><a href='#home' >Home</a></li>
                <li><a href='#home' >Home</a></li>
                <li><a href='#home' >Home</a></li>

            </nav>
            </div>
            <h1 className='Txt'>Responsible</h1>
            <h1 className='Txt1'>consumption And</h1>
            <h1 className='Txt2'>Production</h1>
            <p className='p1'>Connecting world to green energy solution and carbon free future</p>
        </div>

        </>
    )
}

export default Header