import './setupTests.js'
import React from 'react'
import ReactDOM from 'react-dom';
import 'nprogress/nprogress.css';// Progress 进度条样式

import App from './App';
import './style/common.less';
import './style/markdown.css';
import { render } from 'react-snapshot';

const rootElement = document.getElementById('root');

render(<App/>, rootElement)
