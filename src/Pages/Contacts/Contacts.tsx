import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classes from './Contacts.module.css';
import MapBlock from 'components/ContactsComponent/MapBlock/MapBlock';
import Information from 'components/Information/Information';

export default function Contacts() {
  useEffect(() => {
    document.title = 'АиСТ-С | Контакты для связи и заказа оборудования';
  }, []);
  return (
    <main className={classes.contacts__container}>
      <Helmet>
        {/* <title>Контакты | АиСТ-С</title> */}
        <meta
          name="keywords"
          content="аист-с, aist-c, мини погрузчики, погрузчики лонкинг, мини погрузчики в саратове, погрузчики в саратове, погрузчики лонкинг в саратове, вилочные погрузчики, аист-с в саратове, вилочные погрузчики в саратове, купить погрузчики лонкинг в саратове, Бирюзова 22, LONKING"
        />
        <meta
          name="description"
          content='Контакты - ООО "АиСТ-С" - официальный дилер спецтехники Лонкинг.'
        />
      </Helmet>
      <Information/>
      <MapBlock />
    </main>
  );
}