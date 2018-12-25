/**
 * @desc: header
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.less';
import emailpng from './email.png';
import addresspng from './address.png';
import phonepng from './phone.png';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <div className="app-footer-contnet f-jc-ac">
          <div className="content f-js-as-dc">
            <span>Company</span>
            <span>Fujian XingPing Industry&Trade Co.,LTD</span>
            <span>Specialized on road stud since 1996</span>
          </div>
          <div className="content f-js-as-dc">
            <span>Message Us Now</span>
            <span>Available 24/7</span>
            <span><img className="img-cion" src={emailpng} alt="info@roadstudxp.com"/><a className="a-email" href="mailto:info@roadstudxp.com">info@roadstudxp.com</a></span>
          </div>
          <div className="content f-js-as-dc">
            <span>Address Location</span>
            <span><img className="img-cion" src={addresspng}/>2/F Bldg.6 Puda Road Jinpu Bridge Yancuo Town ,Zhangzhou 363119，Fujian Prov. China .</span>
            <span><img className="img-cion" src={phonepng}/>phone: 0086 17359619659 / 15505965690</span>
          </div>
        </div>
      </footer>
    );
  }
}

// export default withRouter(Header)
export default withRouter(Footer);
