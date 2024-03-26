import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classes from './AboutCompany.module.css';
import AboutBlock from '../../components/aboutCompanyComponent/AboutBlock/AboutBlock'
import MainAdvantages from 'components/MainComponents/MainAdvantages/MainAdvantages';
import MainAdvantagesShanmon from 'components/MainComponents/MainAdvantagesShanmon/MainAdvantagesShanmon';

export default function AboutCompany() {
  useEffect(() => {
    document.title = 'Вилочные погрузчики Лонкинг | АиСТ-С';
  }, []);
  return (
    <main className={classes.about__container}>
      <Helmet>
        {/* <title>О Компании | АиСТ-С</title> */}
        <meta
          name="keywords"
          content='аист-с, aist-c, мини погрузчики, погрузчики лонкинг, мини погрузчики в саратове, погрузчики в саратове, погрузчики лонкинг в саратове, вилочные погрузчики, аист-с в саратове, вилочные погрузчики в саратове, купить погрузчики лонкинг в саратове, Бирюзова 22, LONKING'
        />
        <meta
          name="description"
          content='О Компании - ООО "АиСТ-С" - официальный дилер спецтехники Лонкинг.'
        />
      </Helmet>
      <AboutBlock/>
      <MainAdvantages/>
      <MainAdvantagesShanmon/>
    </main>
  );
}