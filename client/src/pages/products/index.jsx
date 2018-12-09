/**
 * @desc: 主页面
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, {Component} from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './productList';
import ProductItem from './productItem';

const Products = () => {
  return (
    <Switch>
      <Route path="/products/" exact component={ProductList} />
      <Route path="/products/:id" exact component={ProductItem} />
    </Switch>
  )
}

export default Products
