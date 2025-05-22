import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage1, LazyPage3 } from '../01-lazyload/pages/';
import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstractPage,
  RegisterFormikPage,
  DynamicFormPage
} from '../03-forms/pages';

const treeRoutes = [
  {
    to: '/',
    text: 'Home',
    element: <LazyPage1 />
  },
  {
    to: '/register',
    text: 'Basic Formulary',
    element: <RegisterPage />
  },
  {
    to: '/formik-basic',
    text: 'Formik basic',
    element: <FormikBasicPage />
  },
  {
    to: '/formik-yup',
    text: 'Formik yup',
    element: <FormikYupPage />
  },
  {
    to: '/formik-components',
    text: 'Formik Components',
    element: <FormikComponents />
  },
  {
    to: '/formik-abstract',
    text: 'Formik Abstract Page',
    element: <FormikAbstractPage />
  },
  {
    to: '/register-formik',
    text: 'Register Formik Page',
    element: <RegisterFormikPage />
  },
  {
    to: '/dynamic-formik',
    text: 'Dynamic Formik',
    element: <DynamicFormPage />
  },
  {
    to: '/user',
    text: 'User',
    element: <LazyPage3 />
  },
  {
    to: '/*',
    text: 'Not Found',
    element: <Navigate to='/lazy1' replace />
  }
];


export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            {treeRoutes.map(({ to, text }) => {
              if (text === 'Not Found') return null;
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
        <Routes>
          {treeRoutes.map(({ to, element }) => (
            <Route key={to} path={to} element={element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
