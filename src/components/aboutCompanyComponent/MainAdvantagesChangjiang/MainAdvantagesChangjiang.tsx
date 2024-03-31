import React from 'react';
import classes from './MainAdvantagesChangjiang.module.css';
import Background from '../../../assets/svg/Changjiang.svg';

export default function MainAdvantagesChangjiang() {
  const texts = [
    'Changjiang – это один из старейших мотопроизводителей в Китае. Более 70 лет компания занимается разработкой и выпуском тяжелой мототехники для выполнения реальных задач. В широком модельном ряду Changjiang можно найти классические мотоциклы, мотоциклы с коляской, грузовые квадроциклы, грузовые мотороллеры и многое другое.',
    'Сегодня бренд активно развивается и производит мотоциклы с современными двигателями водяного охлаждения. Changjiang имеет хорошую репутацию не только на территории Китая. Мотоциклы CJ продаются в западной Европе, получив предварительно все необходимые сертификаты. Теперь попробовать в деле тяжелую технику CJ могут и в России.',
    'Аутентичный СJ Adept 700 Solo и не менее яркие сайдкары CJ Adept 700 и CJ Dynasty 700 привлекают внимание и никого не оставляют равнодушными как в городе, так и в дальних поездках.'
  ];
    return (
    <div className={classes.main_advantages__wrapper}>
      <span className={classes.main_advantages__title}>CHANGJIANG</span>
      <div className={classes.main_advantages__img_and_text}>
        <ul className={classes.main_advantages__text_wrapper}>
          {texts.map((text, id) => {
            return <li className={classes.main_advantages__text} key={id}>{text}</li>
          })}
        </ul>
        <img src={Background} alt='фон' className={classes.main_advantages__img}/>
      </div>
    </div>
    );
}