import React from 'react'
import logo from '../../../assets/Home/shape-bg.png'
import './Footer.css'


export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={logo} 
                alt='no internet connection'/>
            </div>
            
        </div>
    )
}