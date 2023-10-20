import React, { useState } from 'react';
import './landing.css';
import  image from './910168e5d15b51d7a08bfca4ae553b9f.jpg';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import CopyrightIcon from '@mui/icons-material/Copyright';
import MenuIcon from '@mui/icons-material/Menu';

function Landing() {
return (
<div className='body'>
    <div className='topnavs dropdown'>
        <a href=''>Home</a>
        <a href=''>FAQ</a>
        <a href=''>Blog</a>
        <a href=''>LogOut</a>
    </div> 

    <div className='content'>
    <img src={image} className='img'></img>
       <div id='title'>Life is emotion</div>
       
       <div id='des'>Pilates is movement for life</div>
       <p>Club Pilates provides premium,Reformer-based group pilates classes, 
        true to the original method. Class sessions available at a variety of levels and times.</p>
       
        
        
        <button className='button'>Learn</button>
       
    </div>
    <div className="footer">
        <a href=''>
          <EmailIcon />
        </a>
        <a href=''>
          <TwitterIcon />
        </a>
        <a href=''>
          <ShareIcon />
        </a>
        <p className='copy'><CopyrightIcon/> 2023 Priyadarshini</p>
      </div>
</div>   
 );
}

export default Landing;
