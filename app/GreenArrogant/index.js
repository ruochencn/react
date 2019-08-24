import React, { Component } from 'react';
import pic from './images/1.jpg';
import './index.less';

class GreenArrogant extends Component {
  constructor () {
    super();
    this.state = {
      data: [
        {
          pic: pic,
          name: '作品征集'
        },
        {
          pic: pic,
          name: '作品征集'
        },
        {
          pic: pic,
          name: '作品征集'
        },
        {
          pic: pic,
          name: '作品征集'
        },
        {
          pic: pic,
          name: '作品征集'
        },
        {
          pic: pic,
          name: '作品征集'
        },
      ]
    }
  };
  render () {
    const { data } = this.state;
    return (
      <div className="green_content">
        <div className="green_title">
          <h1>青骄创投</h1>
          <span>更多</span>
        </div>
        <div className="green_box">
          <ul>
            {
              data && data.map((res, key) => {
                return <li key={key}>
                  <img src={res.pic} alt={res.name} key={key}/>
                  <p key={key}>{res.name}</p>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default GreenArrogant