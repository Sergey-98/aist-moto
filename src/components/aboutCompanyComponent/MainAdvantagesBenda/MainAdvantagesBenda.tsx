import React from 'react';
import classes from './MainAdvantagesBenda.module.css';
import Background from '../../../assets/svg/benda.svg';

export default function MainAdvantagesBenda() {
  const texts = [
    'Бренд мотоциклов Benda Motorcycle уже успел покорить сердца многих райдеров. У каждой модели яркий и привлекающий внимание внешний вид. Стильные и легкие мотоциклы с V-twin моторами созданы для тех, кто готов покорять дороги уже сейчас!',
    'Завод Hangzhou Saturn Power Technology Co, на котором производится мототехника, имеет свой исследовательский центр, где разрабатываются, проектируются и воплощаются в жизнь новые модели.',
    'Предприятие работает с 2016 года. У бренда есть своя линейка V-twin двигателей.',
    'Помимо Китая, мотоциклы Benda Motorcycle представлены на рынках Италии, Испании, Португалии и России.'
  ];
    return (
    <div className={classes.main_advantages__wrapper}>
      <span className={classes.main_advantages__title}>BENDA MOTOCYCLE</span>
      <div className={classes.main_advantages__img_and_text}>
        <img src={Background} alt='Фон для Benda' className={classes.main_advantages__img}/>
        <ul className={classes.main_advantages__text_wrapper}>
          {texts.map((text, id) => {
            return <li className={classes.main_advantages__text} key={id}>{text}</li>
          })}
        </ul>
      </div>
    </div>
    );
}