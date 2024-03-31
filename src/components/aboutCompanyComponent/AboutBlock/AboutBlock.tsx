import React from 'react';
import classes from './AboutBlock.module.css';

export default function AboutBlock() {
  return (
    <div className={classes.about_block__wrapper}>
      <h2 className={classes.about_title}>О Компании</h2>
      <div className={classes.about_text__wrapper}>
        <span className={classes.about__text}>
          Аист-С - официальный дилер мотоциклов BENDA motocycle, Changjiang, ARIIC в Саратове. 
        </span>
        {/* <span className={classes.about__text}>
          При продаже техники мы даём гарантию 3 года или 3000 моточасов на весь модельный ряд. При необходимости мы поможем установить дополнительное навесное оборудование. Поможен в освоении приобретаемой техники.
        </span>
        <span className={classes.about__text}>
          Наша компания предлагает выгодные условия приобретения техники по программе Trade-Id. Если вам необходимо оперативно обновить парк спецтехники, то вам подходит наша программа Trade-In. По этой программе, мы предварительно оцениваем вашу технику на основании реальных рыночных цен, заключаем договор, выкупаем вашу технику и доставляем новую. Вы не тратите свое время на поиск покупателя и продажу Б/У машины, а время простоя вашего бизнеса таким образом сводится к нулю.
        </span>
        <span className={classes.about__text}>
          Предлагаемая нами продукция отличается высоким качеством изготовления и самыми современными техническими свойствами.
        </span> */}
      </div>
    </div>
    );
}