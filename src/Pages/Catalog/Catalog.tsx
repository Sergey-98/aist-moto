import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import classes from './Catalog.module.css';
import { data } from '../../data/data';
// import CatalogCardElem from 'Pages/CatalogCardElem/CatalogCardElem';
// import { Context } from 'Context/Context';

export default function Catalog() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'Запчасти для погрузчиков Лонкинг | АиСТ-С';
    }, []);
    return (
        <main className={classes.catalog__container}>
        <Helmet>
            {/* <title>Каталог | АиСТ-С</title> */}
            <meta
            name="keywords"
            content="аист-с, aist-c, запчасти для погрузчиков, мини погрузчики, погрузчики лонкинг, мини погрузчики в саратове, погрузчики в саратове, погрузчики лонкинг в саратове, вилочные погрузчики, аист-с в саратове, вилочные погрузчики в саратове, купить погрузчики лонкинг в саратове, Бирюзова 22, LONKING"
            />
            <meta
            name="description"
            content='Каталог - ООО "АиСТ-С" - официальный дилер спецтехники Лонкинг.'
            />
        </Helmet>
        <h3 className={classes.catalog__container_title}>Каталог</h3>
        <div className={classes.catalog_cards__container}>
            {data.map((el) => {
            return (
                <div
                key={el.title}
                className={classes.catalog__card}
                onClick={() => navigate(`/catalog/${el.url}`)}
                >
                <span className={classes.catalog__card_title}>{el.title}</span>
                <img src={el.img} alt={el.title} className={classes.catalog__card_img} />
                </div>
            );
            })}
        </div>
        </main>
    );
}
