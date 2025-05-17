import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage1, LazyPage3 } from '../01-lazyload/pages/';
import { RegisterPage } from '../03-forms/pages';
import FormikAbstractPage from '../03-forms/pages/FormikAbstractPage';
import FormikBasicPage from '../03-forms/pages/FormikBasicPage';
import FormikComponents from '../03-forms/pages/FormikComponents';
import FormikYupPage from '../03-forms/pages/FormikYupPage';

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
                Basic Formulary
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
                to='/formik-yup'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-components'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-abstract'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Abstract Page
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
          <Route path='/formik-yup' element={<FormikYupPage />} />
          <Route path='/formik-components' element={<FormikComponents />} />
          <Route path='/formik-abstract' element={<FormikAbstractPage />} />
          <Route path='/user' element={<LazyPage3 />} />
          <Route path='/*' element={<Navigate to='/lazy1' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
