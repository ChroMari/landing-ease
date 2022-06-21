import './header-style.sass'

import React from 'react';
// @ts-ignore
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Menu } from '../Menu-Header/Menu';

export const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper header_wrapper'>
        <Logo />
        <Menu />
      </div>
    </header>
  )
};
