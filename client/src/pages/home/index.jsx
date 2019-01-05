/**
 * @desc: 主页面-主页面
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, { Component } from 'react';
import './style.less';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import productionData from 'src/asses/productionData.json';

class Home extends Component {
  state = {};
  onItemClick(productId) {
    window.open(`${location.href}products/${productId}`)
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const mainProject = productionData.slice(0, 4);
    return (
      <section className="app-home">
        <SimpleSlider />
        <div className="part-section part-1">
          <h2 className="title">Fujian XingPing Road Equipment Co.,LTD</h2>
          <p className="p-text">
            &nbsp;&nbsp;&nbsp;&nbsp;Fujian XingPing Road Equipment Co.,LTD, always being innovative in traffic and work security
            sector, providing the highest quality product in the fastest time to provide the best customer satisfaction.
          </p>
          <p className="p-text">
            &nbsp;&nbsp;&nbsp;&nbsp;Our strong and expert team is to be a pioneering global brand that is
            human-oriented, respectful to nature and thinking about future generations by continuously increasing
            product quality and diversity .
          </p>
          <p className="p-text">
            &nbsp;&nbsp;&nbsp;&nbsp;For over 20 years XP has been committed to the relentless pursuit of better, this
            means better road stud quality, better sale service, and more inventory in the road safety file,we have
            served more than 100,000 customers worldwide.
          </p>
          <p className="p-text">
            &nbsp;&nbsp;&nbsp;&nbsp;As the foundation of the company, the product quality has become a recognized and
            promising company in the sector with its quality, innovative and pioneering.
          </p>
        </div>
        <div className="part-section part-2">
          <h2 className="title">MAIN PRODUCTS</h2>
          <ul className="f-jc-ac">
            {mainProject.map((item, index) => {
              return (
                <li className="li-item" key={index} onClick={this.onItemClick.bind(null, index)}>
                  <div className="img-box">
                    <img src={item.imgUrls[0]} alt="Solar Road" />
                  </div>
                  <h3 className="h3-title">{item.title}</h3>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="part-section part-3">
          <div className="content">
            <div className="content-c">
              <h2 className="title">Contact Us</h2>
              <ul className="ul-items f-jc-ac">
                <li className="li-item f-jc-ac-dc">
                  <img
                    src="https://user-images.githubusercontent.com/35425986/49698888-f416be00-fc04-11e8-938a-9858a3b2aefd.png"
                    alt=""
                  />
                  <span>James Lin</span>
                  <span>General Manager</span>
                  {/* <a href="mailto:solarroadstud@yeah.net">solarroadstud@yeah.net</a> */}
                </li>
                <li className="li-item f-jc-ac-dc">
                  <img
                    src="https://user-images.githubusercontent.com/35425986/49698887-f416be00-fc04-11e8-897c-912ac7c4ae93.png"
                    alt=""
                  />
                  <span>Bella Zeng </span>
                  <span>Sales Manager</span>
                  {/* <a href="mailto:solarroadstud@yeah.net">solarroadstud@yeah.net</a> */}
                </li>
                <li className="li-item f-jc-ac-dc">
                  <img
                    src="https://user-images.githubusercontent.com/35425986/49698889-f4af5480-fc04-11e8-9565-878bbbd3c87e.png"
                    alt=""
                  />
                  <span>Lucy Guo</span>
                  <span>Marketing Manager</span>
                  {/* <a href="mailto:solarroadstud@yeah.net">solarroadstud@yeah.net</a> */}
                </li>
                <li className="li-item f-jc-ac-dc">
                  <img
                    src="https://user-images.githubusercontent.com/35425986/49698890-f547eb00-fc04-11e8-9ace-f31cd683058c.png"
                    alt=""
                  />
                  <span>Tian Zeng</span>
                  <span>R&D Manager</span>
                  {/* <a href="mailto:solarroadstud@yeah.net">solarroadstud@yeah.net</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="part-section part-4">
          <div className="content">
            <div className="content-c">
              <h2 className="title">Why Choose Us</h2>
              {/* <p className="p-text">
                We have more than 10 years construction and producr traffic signal) ,Traffic Cone , Lane Divider, Convex
                Mirror, Road Line Marking Machine and Paint. Our competitive is professional and comprehensive with
                quality and price, you are warming welcome to cooperate with us.
              </p> */}
              <div className="f-jc-ac labels">
                <span className="label-item">Over 20 tons compression resistance</span>
                <span className="label-item">Can work in low/high temp,-20℃～+70℃.</span>
                <span className="label-item">2 years Quality warranty</span>
                <span className="label-item">Water ingress rating: IP68</span>
              </div>
            </div>
          </div>
        </div>
        <div className="part-section part-5 google-map">
          <h2 className="title">Company Address</h2>
          <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Zhangzhou,+Fujian,+China&amp;aq=0&amp;oq=purwo&amp;sll=24.5106875,115.4360861&amp;sspn=50.291089,104.238281&amp;ie=UTF8&amp;hq=&amp;hnear=Zhangzhou,+Fujian,+China&amp;ll=24.5106875,115.4360861&amp;spn=0.031022,0.050898&amp;t=m&amp;z=14&amp;output=embed" />
        </div>
      </section>
    );
  }
}

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      directionNav: true,
      autoplay: true,
      accessibility: true
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            className="slider-img"
            src="https://user-images.githubusercontent.com/35425986/50725233-8a230300-1135-11e9-8e21-648dd12139dd.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://user-images.githubusercontent.com/35425986/50725234-8a230300-1135-11e9-98f2-5d964fd685ca.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://user-images.githubusercontent.com/35425986/50725235-8abb9980-1135-11e9-83b4-731bfc9539c4.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://user-images.githubusercontent.com/35425986/50725236-8abb9980-1135-11e9-8d4e-e0d9bb9d57bd.jpeg"
            alt=""
          />
        </div>
      </Slider>
    );
  }
}

export default Home;
