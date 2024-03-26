import React from 'react';
import classes from './Header.module.css';
import TopHeader from './TopHeader/TopHeader';
import BottomHeader from './BottomHeader/BottomHeader';

export default function Header() {
    return (
    <header className={classes.header__container}>
        <TopHeader />
        <BottomHeader />
    </header>
    );
}