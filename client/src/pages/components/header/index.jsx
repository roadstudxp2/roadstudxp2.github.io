/**
 * @desc: header
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './style.less';

class Header extends Component {
  state = {
    headerLift: 0
  };
  btnLoginOutClick() {
    this.props.history.replace('/verify/login');
  }
  getIinkIndex() {
    const pathname = this.props.history.location.pathname || ''
    let linkCurser = 0
    if (pathname.indexOf('/about/') >= 0) {
      linkCurser = 1
    }
    if (pathname.indexOf('/news/') >= 0) {
      linkCurser = 2
    }
    if (pathname.indexOf('/products/') >= 0) {
      linkCurser = 3
    }
    return linkCurser
  }
  render() {
    const linkCurser = this.getIinkIndex()
    return (
      <header className="app-header">
        <div className="app-header-content f-jb-ac">
          <div className="title"><span>ROADSTUDXP</span></div>
          <div className="f-jc-ac">
            <Link className={`link-text ${linkCurser === 0 ? 'link-act' : ''}`} to="/home/">Home</Link>
            <Link className={`link-text ${linkCurser === 1 ? 'link-act' : ''}`} to="/about/">About</Link>
            {/* <Link className={`link-text ${linkCurser === 2 ? 'link-act' : ''}`} to="/news/">News</Link> */}
            <Link className={`link-text ${linkCurser === 3 ? 'link-act' : ''}`} to="/products/">Products</Link>
            {/* <div className="key-search f-js-ac">
              <input type="text" placeholder="keyword"/>
              <div className="icon-search">
                <ion-icon name="search"></ion-icon>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    );
  }
}

// export default withRouter(Header)
export default withRouter(Header);
