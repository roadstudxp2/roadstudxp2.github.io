/**
 * @desc: header
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.less';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <div className="app-footer-contnet f-jc-ac">
          <div className="content f-js-as-dc">
            <span>Company</span>
            <span>Fujian XP Industrial Co.,LTD</span>
            <span>Specialized on road stud since 1996</span>
          </div>
          <div className="content f-js-as-dc">
            <span>Message Us Now</span>
            <span>Available 24/7</span>
            <span><ion-icon name="mail"></ion-icon><a className="a-email" href="mailto:solarroadstud@yeah.net">solarroadstud@yeah.net</a></span>
          </div>
          <div className="content f-js-as-dc">
            <span>Address Location</span>
            <span><ion-icon name="pin"></ion-icon>2/F Bldg.6 Puda Road Jinpu Bridge Yancuo Town ,Zhangzhou 363119，Fujian Prov. China .</span>
            <span><ion-icon name="call"></ion-icon>phone:86 15505965690</span>
          </div>
        </div>
      </footer>
    );
  }
}

// export default withRouter(Header)
export default withRouter(Footer);
