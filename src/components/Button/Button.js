import React from 'react';
import cn from 'classnames'
import classes from './Button.module.scss';

export const Button = ({ name, modifier, icon, onClick, onSubmit, type, isDisabled }) => {
  return (
    <button
      className={cn(classes.button, {
        [classes[`button_${modifier}`]]: modifier
      })}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={isDisabled}
    >
      {name}
      {icon}
    </button>
  )
}
