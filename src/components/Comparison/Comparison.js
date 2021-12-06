import React from 'react';
import classes from './Comparison.module.scss';
import { DashIcon } from '../icons/DashIcon';
import { CheckIcon } from '../icons/CheckIcon';

export const Comparison = ({ text, free, pro }) => {
    return (
        <div className={classes.comparison}>
            <p className={classes.comparison__text}>{text}</p>
            {free ? <CheckIcon /> : <DashIcon />}
            {pro ? <CheckIcon /> : <DashIcon />}
        </div>
    )
}