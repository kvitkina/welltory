import React from 'react';
import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/* <h4 className="footer__author">&copy; {new Date().getFullYear()} Supersite, Powered by News API</h4>
      <div className="footer__nav">
        <Link className="footer__nav-item" to='/'>Главная</Link>
        <a className="footer__nav-item" href={links.praktikum} target="_blank" rel="noreferrer">Яндекс.Практикум</a>
      </div>
      <div className="footer__icons">
        {/* {socialIcons.map(({ Icon, link, id }) => {
          return <a key={id} className="footer__icon" href={link} target="_blank" rel="noreferrer">
          <Icon/>
          </a>
        })} */}
      {/* </div> */}
    </footer>
  );
}

