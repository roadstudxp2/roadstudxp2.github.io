/**
 * @desc: 主页面
 * @author: zengtiansheng
 * @update: 2018/5/23
 */
import React, {Component} from 'react';
import MarkdownRenderer from 'react-markdown-renderer';
import articaleData from 'src/asses/articaleData.json'

import './style.less';

class News extends Component {
  state = {
    articaleData: [],
    artItem: {
      title: '',
      describe: '',
      detail: ''
    }
  }
  onArtItemClick(index) {
    this.setState({artItem: articaleData[index]})
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    this.setState({articaleData})
    this.setState({artItem: articaleData[0]})
  }
  render() {
    const artData = this.state.articaleData.reverse()
    const {title, describe, detail} = this.state.artItem
    return (
      <section className="app-news">
        <div className="content f-js-as">
          <div className="content-menu">
            <ul>
              {
                artData.reverse().map((item, index) => {
                  return (<ArtTitle key={index} item={item} index={index} itemClick={this.onArtItemClick.bind(this)}/>)
                })
              }
            </ul>
          </div>
          <div className="content-article">
            <h2 className="h-title">{title}</h2>
            <span className="span-time">{describe}</span>
            <MarkdownRenderer className="markdown-body" markdown={detail} />
          </div>
        </div>
      </section>
    )
  }
}

const ArtTitle = (props) => {
  const {title, describe} = props.item || {}
  return (
    <li className="li-menu" onClick={props.itemClick.bind(null, props.index)}>
      <h2 className="h-title">{title}</h2>
      <span className="span-time">{describe}</span>
    </li>
  )
}

export default News
