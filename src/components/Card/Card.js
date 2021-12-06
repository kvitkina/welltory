import React from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import classes from './Card.module.scss';

export const Card = ({ name, discount, price, oldPrice, details, color, textColor }) => {
    const location = useLocation();
    const path = location.pathname;
  return (
    <div className={cn(classes.card, {
        [[classes.card_active]]: path.slice(1) === name.toLowerCase()
    })}>
        <div className={classes.card__discount} style={{backgroundColor: `${color}`}}>
            <p className={classes.card__discountText} style={{color: `${textColor}`}}>
            {discount}
            </p>
            <div
                className={classes.card__bookmark}
                style={{borderBottomColor: `${color}`, borderRightColor: `${color}`}}
            />
        </div>
        <div className={classes.card__info}>
            <div className={classes.card__description}>
                <h3 className={classes.card__name}>{name}</h3>
                <p className={cn(classes.card__details, {
                    [[classes.card__details_active]]: path.slice(1) === name.toLowerCase()
                })}>
                    {details}
                </p>
            </div>
        </div>
        <div className={classes.card__prices}>
            <p className={classes.card__price} style={{color: `${color}`}}>{price}</p>
            <p className={classes.card__oldPrice}>{oldPrice}</p>
        </div>
    </div>
  )
};
