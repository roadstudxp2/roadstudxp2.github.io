/**
 * @desc: 主页面
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, {Component} from 'react';
import HelloWorld from './components/hello-world.md';
import './style.less';

class News extends Component {
  state = {
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <section className="app-news">
        news
        <HelloWorld username={'Anonymous'} />
      </section>
    )
  }
}

export default News
