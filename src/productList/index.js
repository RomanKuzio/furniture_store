import React, { Component } from 'react';

import './style.css'

const arr = [
    {   
        name: 'Кухня',
        image: 'https://images.ua.prom.st/540315184_w640_h640_kuhnya_tera_mebel_servis_1.jpg'
    },
    {
        name: 'Спальня',
        image: 'https://moemisto.ua/img/cache/event_content_photo/event/0003/35/b29ba94470402449b357964c504882fa5626124e.jpeg?hash=2018-10-08-13-47-33'
    },{
        name: 'Вітальня',
        image: 'http://dimwdm.com/uploads/posts/2015-03/1425569069_1.jpg'
    },
  
    {
        name: 'Коридор',
        image: 'http://budmaster.info/storage/images/32675929b9e40fd77c8982d3ca84e5dd.jpeg'
    },
    {
        name: 'Спальня',
        image: 'https://mebli-bristol.com.ua/media/catalog/product/l/1/l10002840_1.jpg'
    },
   
]


export default class ProducList extends Component {
  render() {
    return (
      <div className="produc-list-wrapper">
        <div className='product-list-title'>Список товарів</div>
        <div className='list'>
            {
                arr.map(item=>(
                    <div className='list-item'> 
                        <div className='item-name'>{item.name}</div>
                        <img className='item-photo' src={item.image}></img>
                    </div>
            ))
            }
        </div>
      </div>
    );
  }
}


