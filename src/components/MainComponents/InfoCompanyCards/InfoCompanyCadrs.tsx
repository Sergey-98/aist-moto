import React from 'react';
import classes from './InfoCompanyCards.module.css';
import OneInfoCard from './OneInfoCard/OneInfoCard';

export default function InfoCompanyCards() {
  const titles = [
    'Крупный завод',
    'Модельный ряд',
    'Простота в обслуживании',
    'Доступные цены',
    'Запчасти',
    'ТО и Сервис'
  ];

  const texts = [
    'LONKING HOLDINGS LIMITED является одним из известных и самых крупных производителей техники в Китае. Площадь завода более 3 000 000 м3. Годовой оборот только фронтальных погрузчиков составляет более 45000 единиц.',
    'Широчайший модельный ряд техники от супер маневренных и небольших моделей до тяжеловесной техники предлагает китайский производитель Lonking. Наши специалисты помогут подобрать технику именно под ваши потребности.',
    'Спецтехника Lonking очень проста в обслуживании. Отлично продуманы многие моменты, связанные с доступностью к основным техническим узлам и агрегатам для осуществления замены или ремонта. Запчасти всегда в наличии у нас на складах.',
    'Продукция Lonking – это наилучшее соотношение цены и качества, зарекомендовавшее себя годами на российском рынке. Мы поставляем технику по ценам завода-производителя.',
    'Наша компания осуществляет комплексные поставки запасных частей для любого типа техники Lonking. Наши специалисты помогут подобрать необходимые детали для скорейшего ремонта. В наличии более 10000 наименований деталей.',
    'Многочисленные сервисные центры нашей компании предлагают услуги комплексного ремонта и сервисного обслуживания спецтехники, как на нашей территории, так и за ее пределами. Выездные бригады произведут ремонт у вас на объекте.'
  ];
  
  return (
    <div className={classes.info_cards__wrapper}>
        {titles.map((el, id) => {
          return <OneInfoCard title={titles[id]} text={texts[id]} key = {id}/>
        })}
    </div>
    );
}