import Image from 'next/image';
import React from 'react';
import iconClose from '../../assets/icons/icon_close.png';
import style from './MobileMenu.module.scss';
import globalClasses from '@styles/globalClasses.module.scss';

interface props {
  menuToggle: boolean;
  setMenuToggle: (menuToggle: boolean) => void;
}

const MobileMenu = (props: props): JSX.Element => {
  const { menuToggle, setMenuToggle } = props;
  return (
    <div className={`${style['mobile-menu']} ${menuToggle && style['left-active']}`}>
      <div className={`${style['icon-close']} ${globalClasses['cursor-pointer']}`}>
        <Image
          src={iconClose}
          alt="close"
          onClick={() => {
            setMenuToggle(!menuToggle);
          }}
        />
      </div>
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
      <ul>
        <li>
          <a href="./">My orders</a>
        </li>
        <li>
          <a href="./">My account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="./" className={style.email}>
            example@example.com
          </a>
        </li>
        <li>
          <a href="./" className={style['sign-out']}>
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
