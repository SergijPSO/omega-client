import Link from "next/link";

const Header = () => {
  return (
    <header className='app__header'>
      <nav className='app__navigation'>
        <div className='app__navigation__logo'>
          <Link href='/' passHref className='app__navigation__logo-link'>
            <img
              src='/omega.svg'
              alt='logo'
              className='app__navigation__logo-image'
            />
          </Link>
        </div>
        <ul className='app__navigation__list'>
          <li className='app__navigation__item'>
            <Link
              href='/'
              scroll={false}
              passHref
              className='app__navigation__item-link'
            >
              WHAT WE DO
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              href='/#prices'
              scroll={false}
              passHref
              className='app__navigation__item-link'
            >
              OUR WORK
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              href='/#about'
              scroll={false}
              passHref
              className='app__navigation__item-link'
            >
              SEO INSIGHTS
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              href='/#contacts'
              scroll={false}
              passHref
              className='app__navigation__item-link'
            >
              ABOU US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
