import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: LazyLayout */ '../01-lazyload/layout/LazyLayout'
    )
);

export const routes: Route[] = [
  {
    to: '/lazyLoad/',
    path: '/lazyLoad/*',
    Component: LazyLayout,
    name: 'Lazy-Layout - Dash',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No-Lazy',
  },
];
