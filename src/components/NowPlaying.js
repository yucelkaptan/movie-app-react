import React from 'react';
import '../assets/NowPlaying.css';

function NowPlaying() {
  return (
    <div className='movieListed'>
        <ul>
            <li><a href="#">NowPlaying</a></li>
            <li><a href="#">Upcoming</a></li>
            <li><a href="#">Top rated</a></li>
            <li><a href="#">Popular</a></li>
        </ul>
    </div>
  )
}

export default NowPlaying
