import React from 'react';
import classes from './Main.module.scss';
import { Button } from '../Button/Button';
import { Description } from '../Description/Description';
import { cardsInfo } from '../../utils/config';
import { Card } from '../Card/Card';
export const Main = () => {
  return (
    <section className={classes.main}>
       <h1 className={classes.main__title}>
          Take better care of yourself every day
        </h1>
      <div className={classes.main__cards}>
        {cardsInfo.map(({id, name, discount, price, oldPrice, details, color, textColor}) => {
          return <Card
            key={id}
            name={name}
            discount={discount}
            price={price}
            oldPrice={oldPrice}
            details={details}
            color={color}
            textColor={textColor}
          />
        })}
      </div>
      <div className={classes.main__button}>
        <Button name="continue" />
      </div>
      <p className={classes.main__text}>No commitments. Cancel anytime</p>
      <Description />
      <div className={classes.main__buttons}>
        <Button name="go with the free version" modifier="border" />
        <Button name="upgrade now" />
      </div>
    </section>
  )
}
