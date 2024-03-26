import React from 'react';
import classes from './MainAdvantagesShanmon.module.css';
import Background from '../../../assets/backgroung_adventages_Shanmon.png';

export default function MainAdvantagesShanmon() {
  const texts = [
    'SHANMON – Компания, основным видом деятельности которой, является производство специальной техники, широко применяемой в строительной отрасли и активно используемой коммунальными предприятиями для решения сложных задач.',
    'Собственные научно-исследовательские подразделения компания объединяют две сотни специалистов, а результаты их труда пользуются спросом не только в азиатских, африканских странах или России, но и Соединенных Штатах. Уделяя повышенное внимание вопросам контроля качества, бренд Shanmon выводит на рынок только эффективную и надежную технику.',
    'Компания обладает мощной технической и производственной мощью, которая внедрила, переварила и впитала множество отечественных и зарубежных передовых технологий. Здесь имеются станки для лазерной резки, станки для огневой резки с ЧПУ, а также современное оборудование для гибки, штамповки, сварки и обработки. Здесь также имеется линия сборки автомобилей и испытательный стенд высокого класса.',
    'Компания прошла сертификацию международной системы качества ISO9001, постоянно внедряет бережливое производство, управление 6Sigma и внедрила метод управления ERP. Ведущие продукты получили сертификат CE.'
  ];
    return (
    <div className={classes.main_advantages__wrapper}>
      <span className={classes.main_advantages__title}>Преимущества техники Shanmon</span>
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