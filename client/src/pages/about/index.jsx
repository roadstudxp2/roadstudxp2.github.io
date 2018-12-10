/**
 * @desc: 主页面
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, { Component } from 'react';
import './style.less';

class About extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="app-about">
        <div className="content-part">
          <h2 className="title">Profile</h2>
          <div className="content-p">
            <h3 className="title-3">About RoadstudXP</h3>
            <p>XP Road Stud --Beautiful and Safe Scenery Line in Cities !</p>
            <p>
              XP Industrial is a professional road stud manufacturer since 1996 ,have senior R&D development specialized
              on road stud,road reflector ,cat eyes road spike .
            </p>
            <p>
              Our massion is that we only provide high quality road stud for our customers ,agent ,and our construction
              project ,road safety is the most important project in every country ,so the high quality road stud is
              necessary !!
            </p>
          </div>
          <div className="content-p">
            <h3 className="title-3">About RoadstudXP</h3>
            <p>XP Road Stud --Beautiful and Safe Scenery Line in Cities !</p>
            <p>
              XP Industrial is a professional road stud manufacturer since 1996 ,have senior R&D development specialized
              on road stud,road reflector ,cat eyes road spike .
            </p>
            <p>
              Our massion is that we only provide high quality road stud for our customers ,agent ,and our construction
              project ,road safety is the most important project in every country ,so the high quality road stud is
              necessary !!
            </p>
          </div>
        </div>
        <div className="content-part">
          <h2 className="title">History</h2>
          <div className="content-p">
            <h3 className="title-3">XP Establishment Time</h3>
            <p>
              XP road stud established in 1996 ,specialized on solar power,LED technology study and development on road
              safety file,own many kinds of patent products,as a Member of National traffic engineering
              facility(highway)standardization (stipulating and revis1ing standard of road safety products in China ) .
            </p>
          </div>
          <div className="content-p">
            <h3 className="title-3">XP Establishment Time</h3>
            <p>
              XP road stud established in 1996 ,specialized on solar power,LED technology study and development on road
              safety file,own many kinds of patent products,as a Member of National traffic engineering
              facility(highway)standardization (stipulating and revis1ing standard of road safety products in China ) .
            </p>
          </div>
          <div className="content-p">
            <h3 className="title-3">XP Establishment Time</h3>
            <p>
              XP road stud established in 1996 ,specialized on solar power,LED technology study and development on road
              safety file,own many kinds of patent products,as a Member of National traffic engineering
              facility(highway)standardization (stipulating and revis1ing standard of road safety products in China ) .
            </p>
          </div>
        </div>
        {/* <div className="content-part">
          <h2 className="title">Certificate</h2>
          <div className="f-js-ac">
            <div>
              <img className="certificate-img" src="/image/imgHome/certificate-img.jpg" alt=""/>
            </div>
            <div>
              <img className="certificate-img" src="/image/imgHome/certificate-img.jpg" alt=""/>
            </div>
          </div>
        </div> */}
        <div className="content-part google-map">
          <h2 className="title">Company Address</h2>
          <div className="f-js-as">
            <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Zhangzhou,+Fujian,+China&amp;aq=0&amp;oq=purwo&amp;sll=24.5106875,115.4360861&amp;sspn=50.291089,104.238281&amp;ie=UTF8&amp;hq=&amp;hnear=Zhangzhou,+Fujian,+China&amp;ll=24.5106875,115.4360861&amp;spn=0.031022,0.050898&amp;t=m&amp;z=14&amp;output=embed" />
            <div className="address">
              <p className="p-tel">tel: +8615505965690</p>
              <p>2/F Bldg.6 Puda Road Jinpu Bridge Yancuo Town , Zhangzhou 363119，Fujian Prov. China</p>
              <p>Welcome to visit our factory !!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
