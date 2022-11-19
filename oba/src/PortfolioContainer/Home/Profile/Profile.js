import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService'
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='#'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/ebenezer-olatunde-3013b8188/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://github.com/obaolat/'>
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I am <span className='highlighted-text'>Obaloluwa</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Backend Developer",
                                    1000,
                                    "Python Developer",
                                    1000,
                                    "Django Dev",
                                    1000,
                                    "DevOps",
                                    1000,
                                    "MERN Stack",
                                    1000,
                                    "Result Oriented",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-tag-line'>
                                Constantly eagerly learning and looking forward to be better
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                    <div className="btn primary-btn" 
                    onClick={()=> ScrollService.scrollHandler.scrollToHireMe()} >           Hire Me 
                        
                    </div>
                        <a href='Olatunde Ebenezer CV .pdf' download = 'Olatunde Ebenezer Obaloluwa.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    );
}
