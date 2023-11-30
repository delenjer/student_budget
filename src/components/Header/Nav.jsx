import {NavLink} from 'react-router-dom';
import {PageRouters} from '../../routers';

export const Nav = () => (
  <nav className="nav">
    <NavLink to={PageRouters.Home} replace={true} className="nav__link">Home</NavLink>

    <NavLink to={PageRouters.Reporting} replace={true} className="nav__link">Reporting</NavLink>

    <NavLink to={PageRouters.Dashboard} replace={true} className="nav__link">Dashboard</NavLink>

    <NavLink to={PageRouters.About} replace={true} className="nav__link">About</NavLink>
  </nav>
);
