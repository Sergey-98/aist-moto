import React from 'react';
import classes from './MainPhoto.module.css';

export default function MainPhoto() {
    return (
    <div className={classes.main_photo__wrapper}>
      <div className={classes.main_title__wrapper}>
        <h1 className={classes.main_photo__title}>АИСТ-С</h1>
        <span className={classes.main_photo__text}>Официальный дилер по продаже складской и строительной техники с 2013 года.</span>
      </div>
    </div>
    );
}