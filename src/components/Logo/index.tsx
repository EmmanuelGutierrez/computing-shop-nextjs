import React from 'react';

import logo from '@logos/logo.gif';
import style from './Logo.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import globalClasses from '@styles/globalClasses.module.scss';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <figure className={`${style['logo-container']} ${globalClasses['cursor-pointer']}`}>
        <Image src={logo} alt="logo" />
        <figcaption>GAMESTORE</figcaption>
      </figure>
    </Link>
  );
};

export { Logo };
