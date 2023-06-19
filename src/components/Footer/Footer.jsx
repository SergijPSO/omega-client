import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='app-footer'>
      <span className='app-footer__copyright'>Ukraine 2000-2015</span>
      <div className='app-footer__socials'>
        <Link
          href='https://uk-ua.facebook.com/'
          passHref
          className='app-footer__socials__item'
        >
          <svg className='app-footer__socials__item-icon'>
            <use xlinkHref='./images/sprite.svg#fb'></use>
          </svg>
        </Link>
        <Link
          href='https://twitter.com/?lang=uk'
          passHref
          className='app-footer__socials__item'
        >
          <svg className='app-footer__socials__item-icon'>
            <use xlinkHref='./images/sprite.svg#twitter'></use>
          </svg>
        </Link>
        <Link
          href='https://www.linkedin.com/'
          passHref
          className='app-footer__socials__item'
        >
          <svg className='app-footer__socials__item-icon'>
            <use xlinkHref='./images/sprite.svg#linkedin'></use>
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
