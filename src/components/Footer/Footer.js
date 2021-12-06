import React from 'react';
import classes from './Footer.module.scss';
import { socialIcons, appIcons } from '../../utils/config';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__wrapper}>
        <h4 className={classes.footer__title}>Get the mobile app</h4>
        <div className={classes.footer__icons}>
          {appIcons.map(({ Icon, link, id }) => {
            return <a key={id} className={classes.footer__icon} href={link} target="_blank" rel="noreferrer">
              <Icon/>
            </a>
          })} 
        </div>
      </div>
      <div className={classes.footer__links}>
        <a className={classes.footer__link} href='https://welltory.com/terms/' target="_blank" rel="noreferrer">
          Terms of use
        </a>
        <a className={classes.footer__link} href='https://welltory.com/privacy/' target="_blank" rel="noreferrer">
        Privacy policy
        </a>
      </div>
      <div className="footer__icons">
        {socialIcons.map(({ Icon, link, id }) => {
          return <a key={id} className={classes.footer__icon} href={link} target="_blank" rel="noreferrer">
            <Icon/>
          </a>
        })} 
      </div>
    </footer>
  );
}

