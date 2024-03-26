import React from 'react';
import classes from './Button.module.css';

type Props = {
  text: string,
  onClick: React.MouseEventHandler
}

export default function Button({text, onClick}: Props) {
    return (
      <button className={classes.button} onClick={onClick}>{text}</button>
    );
  }