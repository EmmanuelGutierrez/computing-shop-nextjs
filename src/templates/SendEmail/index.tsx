import React from 'react';
import './SendEmail.scss';

import logo from '@logos/logo.gif';
import email from '@icons/email.svg';
import Image from 'next/image';
import Link from 'next/link';

const SendEmail = (): JSX.Element => {
  return (
    <div className="SendEmail">
      <div className="SendEmail-container">
        <Image src={logo} alt="logo" className="logo" />
        <h1 className="title">Email has been send</h1>
        <p className="subtitle">Please check yout inbox for instructions on hoy to reset the password</p>
        <div className="email-image-container">
          <Image src={email} alt="email-image" />
        </div>
        <button className="primary-button login-button button">Login</button>
        <p className="resend">
          <span>Didn&gt t recive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export { SendEmail };
