import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import classes from './Footer.module.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
      <footer className={classes.footer_container}>
        <div className={classes.footer__main_logo}>
          <img className={classes.footer__logo} src={logo} alt="Логотип АИСТ-С" />
          {/* <span className={classes.footer_title}>Аист-С</span> */}
        </div>
        <div className={classes.footer_container__info}>
          <NavLink className={classes.footer__navbar_link} to="/about">
            О нас
          </NavLink>
            <a className={classes.footer__navbar_link} href="#" onClick={() => window.open('https://yandex.ru/maps/194/saratov/?from=api-maps&ll=46.031820%2C51.551301&mode=routes&origin=jsapi_2_1_79&rtext=51.533562%2C46.034264~51.569315%2C46.031589&rtt=taxi&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNjQ4NTg2MTQ0ElHQoNC-0YHRgdC40Y8sINCh0LDRgNCw0YLQvtCyLCDRg9C70LjRhtCwINC40LzQtdC90Lgg0KEu0KEuINCR0LjRgNGO0LfQvtCy0LAsIDIy0JEiCg1YIDhCFfpGTkI%2C&z=13.63', '_blank')}>
              Маршрут
            </a>
        </div>
        <div className={classes.footer_container__contacts}>
          <span className={classes.contacts__title}>Контакты</span>
          <div className={classes.contacts_textblock}>
            <span className={classes.contacts_text}>+7 (8452) 42-00-11</span>
            <span className={classes.contacts_text}>+7 (927) 223-95-73</span>
            <span className={classes.contacts_text}>+7 (937) 258-50-05</span>
            <span className={classes.contacts_text}>420011@mail.ru</span>
          </div>
        </div>
        <div className={classes.footer_container__adress}>
          <span className={classes.adress__title}>Адрес</span>
          <span className={classes.adress__text}>г. Саратов, ул. Бирюзова 22Б</span>
        </div>
      </footer>
    );
  }