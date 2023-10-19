import React from 'react';
import './landing.css';
import  image from './910168e5d15b51d7a08bfca4ae553b9f.jpg';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';

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
</div>   
 );
}

export default Landing;
