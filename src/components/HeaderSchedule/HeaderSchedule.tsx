import React from 'react';
import classes from './HeaderSchedule.module.css';

export default function HeaderSchedule() {
    return (
    <div className={classes.header__schedule}>
        <span className={classes.header__schedule__text}>Отвечаем на звонки</span>
        <span className={classes.header__schedule__text}>с 9:00 до 18:00</span>
        <span className={classes.header__schedule__text}>Выходной - сб и вс</span>
    </div>
    );
}