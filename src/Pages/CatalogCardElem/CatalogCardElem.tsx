import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classes from './CatalogCardElem.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Page } from 'types/types';
import {data} from '../../data/data';

type CatalogCardElem = {
    onClick?: () => void
}



export default function CatalogCardElem() {
    useEffect(() => {
        document.title = 'Погрузчики Лонкинг в саратове | АиСТ-С';
    }, []);
    const navigate = useNavigate();
    const {id} = useParams();
    const param = id;
    const dataN: Page[] = (data.filter((elem) => elem.url == param)[0].pages);
    const title = (data.filter((elem) => elem.url == param)[0].title);
    return (
        <main className={classes.catalog_forklift__container}>
            <Helmet>
                {/* <title>{title} | АиСТ-С</title> */}
                <meta
                name="keywords"
                content={`${title.toLowerCase()}, ${title.toLowerCase()} в Саратове, ${title.toLowerCase()} в саратове, аист-с, aist-c, погрузчики лонкинг в саратове, вилочные погрузчики, погрузчики в саратове, аист-с в саратове, вилочные погрузчики в саратове, купить погрузчики лонкинг в саратове, Бирюзова 22, LONKING`}
                />
                <meta
                name="description"
                content={`Каталог (${title}) - ООО "АиСТ-С" - официальный дилер спецтехники Лонкинг.`}
                />
            </Helmet>
            <h3 className={classes.catalog_forklift__container_title}>{title}</h3>
            <div className={classes.catalog_forklift_cards__container}>
                {dataN.map((el)=> {
                    return (
                        <div key = {el.titleProduct} className={classes.catalog_forklift_card} onClick={() => navigate(`/catalog/${(data.filter((elem) => elem.url == param)[0].url)}/${el.url}`)}>
                            <span className={classes.catalog_forklift_card_title}><strong>{el.titleProduct}</strong></span>
                            <img src={el.imgProduct} alt={el.titleProduct} className={classes.catalog_forklift_card_img}/>
                            <div className={classes.catalog_forklift_card_text_block}>
                            {el.description?.manufacturer ? <span className={classes.catalog_forklift_card_text}>Производитель: {el.manufacturer}</span> : null} 
                            {/* {el.description?.loadСapacity ? <span className={classes.catalog_forklift_card_text}>Грузоподъемность: {el.description.loadСapacity}</span> : null} */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
  );
}