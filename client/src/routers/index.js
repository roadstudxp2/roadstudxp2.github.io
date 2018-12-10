import React from 'react';
import Loadable from 'react-loadable';

const loadingComponent = () => (
  <div className="loading-content"></div>
);

export default {
  PageHome: Loadable({
    loader: () => import('src/pages/home'),
    loading: loadingComponent
  }),
  PageAbout: Loadable({
    loader: () => import('src/pages/about'),
    loading: loadingComponent
  }),
  PageNews: Loadable({
    loader: () => import('src/pages/news'),
    loading: loadingComponent
  }),
  PageProducts: Loadable({
    loader: () => import('src/pages/products'),
    loading: loadingComponent
  })
}
