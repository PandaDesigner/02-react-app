import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/';
import FormikBasicPage from '../03-forms/pages/FormikBasicPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink
                to='/register'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Basic Formulario
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-basic'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik basic
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
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/formik-basic' element={<FormikBasicPage />} />
          <Route path='/user' element={<LazyPage3 />} />
          <Route path='/*' element={<Navigate to='/lazy1' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
