import React from 'react';
import classes from './OneInfoCard.module.css';

type InfoCardProps = {
  title: string;
  text: string;
}

export default function OneInfoCard(props: InfoCardProps) {
    return (
    <div className={classes.info_card__wrapper}>
        <h2 className={classes.info_card__title}>{props.title}</h2>
        <span className={classes.info_card__text}>{props.text}</span>
    </div>
    );
}