import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './TopHeader.module.css';
import { Context } from 'Context/Context';
import logo from '../../../assets/logo.svg';
import Button from 'components/UI/Button/Button';
import HeaderSchedule from 'components/HeaderSchedule/HeaderSchedule';
import HeaderLocation from 'components/HeaderLocation/HeaderLocation';
import HeaderNumbers from 'components/HeaderNumbers/HeaderNumbers';
import Hamburger from 'components/Hamburger/Hamburger';
import PulseButton from 'components/UI/Button/PulseButton/PulseButton';

export default function TopHeader() {
    const { state, dispatch } = useContext(Context);
    const changeModalCallback = () => {
        if (state.isOpenModalCallback) {
          if (dispatch) {
            dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: false } });
          }
        } else {
          if (dispatch) {
            dispatch({ type: 'resetModalCallback', payload: { isOpenModalCallback: true } });
          }
        }
      };
    const openModal = () => {
        if (dispatch) {
            dispatch({ type: 'resetModal', payload: { isOpenModal: true } });
        }
    };
    return (
    <div className={classes.top_header__container}>
        <NavLink className= {classes.top_header__logo_wrapper} to="/">
            <img
                src={logo}
                alt="Логотип АИСТ-С"
                className={classes.top_header__logo}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            />
        </NavLink >
        <HeaderSchedule/>
        <HeaderLocation/>
        <Button text="Оставить заявку" onClick={openModal}/>
        <HeaderNumbers/>
        <Hamburger/>
        <PulseButton onClick={changeModalCallback} />
    </div>
    );
}