import './header-style.sass'

import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';

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
