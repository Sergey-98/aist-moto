import React from 'react';
import classes from './HeaderNumbers.module.css';

export default function HeaderNumbers() {
    return (
    <div className={classes.header__numbers}>
        <span className={classes.header__numbers__text}>+7 (937) 258-50-05</span>
        <span className={classes.header__numbers__text}>+7 (927) 223-95-73</span>
        <span className={classes.header__numbers__textlink}>Вам перезвонить?</span>
    </div>
    );
}