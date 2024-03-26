import React, { useEffect, useState } from 'react';
import style from './UpButton.module.css';

export default function UpButton() {
    const [scroll, setScroll] = useState(0);
useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.pageYOffset);
    });
  }), [scroll];
  
const windowUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    console.log(window.pageYOffset);
}

    return scroll > 300 ? <button className={style.up_button} onClick={windowUp}>
    <svg className={style.up_button__lines} viewBox="0 0 30 45">
        <line x1="15" y1="5" x2="15" y2="35" stroke="#2e2b28" strokeWidth="1.5"/>
        <line x1="15" y1="5" x2="5" y2="20" stroke="#2e2b28" strokeWidth="1.5"/>
        <line x1="15" y1="5" x2="25" y2="20" stroke="#2e2b28" strokeWidth="1.5"/>
    </svg>
  </button> : null
}