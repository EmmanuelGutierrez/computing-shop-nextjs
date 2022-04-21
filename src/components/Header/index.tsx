import React, { useContext, useState } from 'react';

import menu from '@icons/icon_menu.svg';
import shoppingCart from '../../assets/icons/icon_shopping_cart.svg';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { AppContext, AppContextType } from '../../context/AppContext';
import { ShoppingCart } from '../../containers/ShoppingCart';
import MobileMenu from '../MobileMenu';
import Image from 'next/image';
import style from './Header.module.scss';
import globalClasses from '@styles/globalClasses.module.scss';

const Header = (): JSX.Element => {
  const { state } = useContext(AppContext) as AppContextType;
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className={`${style.header}`}>
      <MobileMenu menuToggle={toggleMobileMenu} setMenuToggle={setToggleMobileMenu} />
      <figure className={`${style.menu} ${globalClasses['cursor-pointer']}`}>
        <Image
          src={menu}
          alt="icon-menu"
          onClick={() => {
            setToggleMobileMenu(!toggleMobileMenu);
          }}
        />
      </figure>
      <div className={style['navbar-left']}>
        <Logo />

        <ul>
          <li>
            <a href="./">CATEGORIES</a>
          </li>
          <li>
            <a href="./">Componentes</a>
          </li>
          <li>
            <a href="./">Peripherals</a>
          </li>
          <li>
            <a href="./">Notebooks</a>
          </li>
          <li>
            <a href="./">Tablets</a>
          </li>
          <li>
            <a href="./">Softwares</a>
          </li>
        </ul>
      </div>
      <div className={style['navbar-right']}>
        <ul>
          <li className={style['navbar-email']} onClick={handleToggle}>
            <div className={style['navbar-email-text']}>
              <p> example@example.com</p>
            </div>
            <Menu activeState={toggle} />
          </li>
          <li
            className={`${style['navbar-shopping-cart']} ${globalClasses['cursor-pointer']}`}
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <Image src={shoppingCart} alt="shopping-cart" />
            {state.cart.length ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>

      <ShoppingCart activeState={toggleOrders} />
    </nav>
  );
};

export default Header;
