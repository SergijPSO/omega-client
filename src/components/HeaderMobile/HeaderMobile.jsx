import { useState } from "react";
import Link from "next/link";

const HeaderMobile = () => {
  const [isActive, setActive] = useState(false);

  const navToggle = () => {
    setActive(!isActive);
  };

  const closeNav = () => {
    setActive(false);
  };

  return (
    <div className='app__mobile'>
      <header className='app__mobile-header'>
        <div className='app__mobile-header__logo'>
          <Link href='/' passHref className='app__mobile-header__logo-link'>
            <img
              src='/omega.svg'
              alt='logo'
              className='app__mobile-header__logo-image'
            />
          </Link>
        </div>

        <div onClick={navToggle} className='app__mobile-header__burger'>
          <span className='app__mobile-header__burger-item'></span>
          <span className='app__mobile-header__burger-item'></span>
          <span className='app__mobile-header__burger-item'></span>
        </div>
      </header>
      <nav
        className={
          isActive ? "app__mobile-navigation--active" : "app__mobile-navigation"
        }
      >
        <Link
          href='/'
          scroll={false}
          passHref
          className='app__mobile-navigation__item'
          onClick={closeNav}
        >
          WHAT WE DO
        </Link>

        <Link
          href='/'
          scroll={false}
          passHref
          className='app__mobile-navigation__item'
          onClick={closeNav}
        >
          OUR WORK
        </Link>

        <Link
          href='/'
          scroll={false}
          passHref
          className='app__mobile-navigation__item'
          onClick={closeNav}
        >
          SEO INSIGHTS
        </Link>

        <Link
          href='/'
          scroll={false}
          passHref
          className='app__mobile-navigation__item'
          onClick={closeNav}
        >
          ABOU US
        </Link>
      </nav>
    </div>
  );
};

export default HeaderMobile;
