import React, { useState, useEffect } from 'react';
import classes from './DinamicCounter.module.css';

type Props = {
  number: number
}

export default function DinamicCounter({number}: Props) {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
            counter !== number && setTimeout(setCounter, 1, counter+1);
        }
    );
    return (
      <span className={classes.counterWindow}>{counter}+</span>
    );
  }