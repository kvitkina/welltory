import React, { useState } from 'react';
import cn from 'classnames';
import classes from './Card.module.scss';

export const Card = ({ name, discount, price, oldPrice, details, color, textColor }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true)
  };
  return (
    <div className={cn(classes.card, {
        [[classes.card_active]]: isActive
    })} onClick={handleClick}>
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
                    [[classes.card__details_active]]: isActive
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
