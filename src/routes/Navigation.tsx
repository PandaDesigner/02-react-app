import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/user'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                User
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<LazyPage1 />} />
          <Route path='about' element={<LazyPage2 />} />
          <Route path='user' element={<LazyPage3 />} />
          <Route path='/*' element={<Navigate to='/lazy1' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
