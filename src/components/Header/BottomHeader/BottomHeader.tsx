import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './BottomHeader.css';
import { Context } from 'Context/Context';

export default function BottomHeader() {
    const { isBurger, setIsBurger } = useContext(Context);
    const changeBurger = () => {
        if (isBurger) {
          setIsBurger(false);
        }
      };
    return (
        <nav className={isBurger ? 'header__navbar active' : 'header__navbar'}>
            <div className='header__navbar_links'>
                <NavLink className='header__navbar_link' to="/" onClick={changeBurger}>
                    Главная
                </NavLink>
                <NavLink className='header__navbar_link' to="/catalog" onClick={changeBurger}>
                    Каталог
                </NavLink>
                <NavLink className='header__navbar_link' to="/about" onClick={changeBurger}>
                    О компании
                </NavLink>
                <NavLink className='header__navbar_link' to="/contacts" onClick={changeBurger}>
                    Контакты
                </NavLink>
            </div>
        </nav>
    );
}