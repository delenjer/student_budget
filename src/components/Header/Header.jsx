import {LogOut} from '../Auth/LogOut';
import {Nav} from './Nav';

export const Header = () => (
  <header className="header">
    <Nav />

    <LogOut />
  </header>
);
