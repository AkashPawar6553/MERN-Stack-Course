import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video';
import aivideo from './../assets/aivideo.webm'

const Videocomponent = () => {
  return (
    <video autoPlay loop muted >
        <source src={aivideo} type="video/webm"/>
    </video>
  );
}

export default Videocomponent