/**
 * @desc: 主页面
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, {Component} from 'react';
import NProgress from 'nprogress'; // Progress 进度条
import { Link } from 'react-router-dom';
import {getProducts} from 'src/API/index.js';
import './product-list.less'
import productionData from 'src/asses/productionData.json'

class ProductList extends Component {
  state = {
    isShowContentFlag: false,
    resData: {
      list: []
    },
    productionData: []
  }
  async getData() {
    const res = await getProducts()
    if (res.success) {
      this.setState({resData: res.data})
    }
  }
  onItemClick(productId) {
    window.open(`${location.href}${productId}`)
  }
  constructor() {
    super()
    NProgress.start()
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    this.setState({productionData})
  }
  componentDidUpdate(previousProps, previousState) {
    if (!this.state.isShowContentFlag) {
      NProgress.done()
      this.setState({isShowContentFlag: true})
    }
  }
  render() {
    const productionData = this.state.productionData
    console.log(this.state.isShowContentFlag);
    return (
      <section className="app-product-list" style={this.state.isShowContentFlag ? {visibility: 'visible'} : {visibility: 'hidden'}}>
        <div className="top-guide">
          <Link className="top-guide-link" to="/products/">Products</Link>
        </div>
        <ul className="ul-contnet f-js-as">
          {
            productionData.map((item, index) => {
              return (<ProductItem key={index} item={item} index={index} itemClick={this.onItemClick.bind(this)}/>)
            })
          }
        </ul>
      </section>
    )
  }
}

const ProductItem = (props) => {
  const {imgUrls, title} = props.item || {}

  return (
    <li className="li-item" onClick={props.itemClick.bind(null, props.index)}>
      <div className="img-box">
        <img className="prod-img" src={imgUrls[0]} alt="Solar Road" />
      </div>
      <div className="title">{title}</div>
    </li>
  )
}

export default ProductList
