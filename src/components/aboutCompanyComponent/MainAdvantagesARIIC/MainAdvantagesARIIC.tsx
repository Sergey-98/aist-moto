import React from 'react';
import classes from './MainAdvantagesARIIC.module.css';
import Background from '../../../assets/svg/ariic.svg';

export default function MainAdvantagesARIIC() {
  const texts = [
    'Бренд ARIIC объединяет в себе производство, исследования и разработки.',
    'Скутеры продаются на внутреннем рынке Китая, но также бренд активно выходит на другие рынки и уже успешно продается в Европе.',
    'ARIIC инвестируется JinLang Power Co., Ltd. С момента своего основания в 1998 году JinLang является ведущим производителем двигателей для мотоциклов.',
    'Компания постоянно внедряет инновации для создания высококачественных двигателей, которые получили широкое признание как в Китае, так и за рубежом.'
  ];
    return (
    <div className={classes.main_advantages__wrapper}>
      <span className={classes.main_advantages__title}>ARIIC</span>
      <div className={classes.main_advantages__img_and_text}>
        <img src={Background} alt='Фон для ariic' className={classes.main_advantages__img}/>
        <ul className={classes.main_advantages__text_wrapper}>
          {texts.map((text, id) => {
            return <li className={classes.main_advantages__text} key={id}>{text}</li>
          })}
        </ul>
      </div>
    </div>
    );
}