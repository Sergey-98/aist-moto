import React from 'react';
import classes from './OurAdvantages.module.css';

import oneAdvantages from '../../../assets/svg/advantages/oneOurAdvantages.svg';
import twoAdvantages from '../../../assets/svg/advantages/twoOurAdvantages.svg';
import threeAdvantages from '../../../assets/svg/advantages/threeOurAdvantages.svg';
import fourAdvantages from '../../../assets/svg/advantages/fourOurAdvantages.svg';
import fiveAdvantages from '../../../assets/svg/advantages/fiveOurAdvantages.svg';
import sixAdvantages from '../../../assets/svg/advantages/sixOurAdvantages.svg';


export default function OurAdvantages() {
  const texts = [
    'Занимаемся продажей, гарантийным и постгарантийным обслуживанием',
    'Работаем с крупнейшими производителями Китая, Кореи и России',
    'Располагаем собственным Сервисным центром с парком мобильных мастерских',
    'Успешно работаем на рынке с 2013 года',
    'Постоянно развиваем дилерскую сеть. Поставляем технику в любой регион России',
    'Предлагаем полный спектр оригинальных запчастей ко всей поставляемой продукции'
  ];
  const images = [
    oneAdvantages,
    twoAdvantages,
    threeAdvantages,
    fourAdvantages,
    fiveAdvantages,
    sixAdvantages
  ];
    return (
    <div className={classes.our_advantages__wrapper}>
      <span className={classes.our_advantages__title}>Наши преимущества</span>
      <div className={classes.our_advantages__text_wrapper}>
        {texts.map((text, id) => {
          return (
            <div className={classes.one_advantages__wrapper} key={id}>
              <img
                src={images[id]}
                alt="Преимущества Lonking"
                width='50px'
                className={classes.advantages__logo}
            />
              <span className={classes.our_advantages__text}>{text}</span>
            </div>
          )
        })}
      </div>
    </div>
    );
}