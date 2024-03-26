import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classes from './Main.module.css';
import InfoCompanyCards from '../../components/MainComponents/InfoCompanyCards/InfoCompanyCadrs';
import MainPhoto from 'components/MainComponents/MainPhoto/MainPhoto';
import OurAdvantages from 'components/MainComponents/OurAdvantages/OurAdvantages';
// import Button from '../../components/UI/Button/Button';
// import DinamicCounter from '../../components/UI/DinamicCounter/DinamicCounter';
// import Loader from 'components/UI/Loader/Loader';

export default function Main() {
  useEffect(() => {
    document.title = 'Мини погрузчики Лонкинг | АиСТ-С';
  }, []);
  return (
    <main className={classes.main__container}>
      <Helmet>
        {/* <title>Главная | АиСТ-С</title> */}
        <meta
          name="keywords"
          content='аист-с, aist-c, лонкинг в саратове, Lonking, мини погрузчики, погрузчики лонкинг, мини погрузчики в саратове, погрузчики в саратове, погрузчики лонкинг в саратове, вилочные погрузчики, аист-с в саратове, вилочные погрузчики в саратове, купить погрузчики лонкинг в саратове, Бирюзова 22, LONKING'
        />
        <meta
          name="description"
          content='ООО "АиСТ-С" - официальный дилер спецтехники Лонкинг. Прямые поставки из Китая. Гарантия ⑤ лет! ✓ В наличии на складе! Быстрая доставка по России ⛟. тел: ☎'
        />
      </Helmet>
      <MainPhoto/>
      <InfoCompanyCards />
      <OurAdvantages />
      {/* <h3>Главная страница</h3> */}
      
      {/* <DinamicCounter number={555}/> */}
    </main>
  );
}