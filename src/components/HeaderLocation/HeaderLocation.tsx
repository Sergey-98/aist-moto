import React from 'react';
import classes from './HeaderLocation.module.css';
import logo from '../../assets/svg/location.svg';

export default function HeaderLocation() {
    return (
    <div className={classes.header__location}>
        <img
                src={logo}
                alt="Логотип АИСТ-С"
                className={classes.header__location__logo}
        />
        <div className={classes.header__location__logo}></div>
        <div className={classes.header__location__textblock}>
            <span className={classes.header__schedule__text}>г. Саратов</span>
            <span className={classes.header__schedule__text}>ул. Бирюзова 22Б</span>
        </div>
    </div>
    );
}