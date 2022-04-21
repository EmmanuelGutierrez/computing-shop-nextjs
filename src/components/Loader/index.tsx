import React from 'react';
import style from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={style.container}>
      <div className={style['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export { Loader };
