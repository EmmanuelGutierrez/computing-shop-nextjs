import React from "react";
import style from  "./Menu.module.scss";

interface props {
  activeState: boolean;
}

const Menu = (props: props): JSX.Element => {
  return (
    <div className={`${style.Menu} ${props.activeState && style['Menu-active']}`}>
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
