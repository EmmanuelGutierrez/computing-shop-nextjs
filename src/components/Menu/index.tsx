import Link from 'next/link';
import React from 'react';
import style from './Menu.module.scss';

interface props {
  activeState: boolean;
}

const Menu = (props: props): JSX.Element => {
  return (
    <div className={`${style.Menu} ${props.activeState && style['Menu-active']}`}>
      <ul>
        <li>
          <Link href="/">My orders</Link>
        </li>
        <li>
          <Link href="/">My account</Link>
        </li>
        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
