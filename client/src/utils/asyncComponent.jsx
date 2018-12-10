/**
 * @desc: 组件按需加载实现工具
 * @author: zengtiansheng
 * @update: 2018/4/21
 */
import React from 'react';
import Loadable from 'react-loadable';

const loadingComponent = () => (
  <div></div>
);

export default (path) => {
  return Loadable({
    loader: () => import(path),
    loading: loadingComponent
  });
};
