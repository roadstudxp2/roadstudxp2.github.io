import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { parse } from 'url';
import { homepage } from '../package.json';
import routers from 'src/routers';
import PageHome from 'src/pages/home';
import PageAbout from 'src/pages/about';
import HeaderComp from 'src/pages/components/header';
import FooterComp from 'src/pages/components/footer';
import './App.less';

const basename = parse(homepage).pathname;

const loadingComponent = () => (
  <div className="loading-content">dskkkkkksdjdjdjdskjdk</div>
);

const App = () => (
  <BrowserRouter basename={basename}>
    <section className="app">
      <div className="app-body">
        <HeaderComp/>
        <section className="app-content">
          <Switch>
            <Route path="/" exact component={PageHome} />
            <Route path="/about/" component={PageAbout} />
            <Route path="/news/" component={routers.PageNews} />
            <Route path="/products/" component={routers.PageProducts} />
            <Redirect to='/'/>
          </Switch>
        </section>
      </div>
      <FooterComp/>
    </section>
  </BrowserRouter>
);

export default App;
