import React from 'react';
import classes from './Information.module.css';
import info_location from '../../assets/icons/info_location.svg';
import info_clock from '../../assets/icons/info_clock.svg';
import info_phone from '../../assets/icons/info_phone.svg';
import info_mail from '../../assets/icons/info_mail.svg';
import InfoComponent from './InfoComponent/InfoComponent';
import GuideContact from './GuideContact/GuideContact';

export default function Information() {
  const infoIcons = [info_location, info_clock, info_mail, info_phone];
  const infoTitles = [
    'Юридический адрес:',
    'Время работы офиса:',
    'Электронная почта:',
    'Контактный телефон:',
  ];
  const infoTexts = [
    '410010, г. Саратов, ул.Бирюзова 22Б',
    'пн-пт с 9.00 до 18.00. Сб, вс выходной',
    '420011@mail.ru',
    '(8452) 42-00-11',
  ];

  return (
    <section className={classes.information__container}>
      <div className={classes.information__contacts_container}>
      <GuideContact />
        {infoIcons.map((elem, index) => {
          return (
            <InfoComponent
              src={elem}
              title={infoTitles[index]}
              text={infoTexts[index]}
              key={elem}
            />
          );
        })}
      </div>
    </section>
  );
}
