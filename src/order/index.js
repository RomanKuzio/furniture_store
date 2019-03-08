import React, { Component } from 'react';
import Form from './form'
import './style.css';

class Order extends Component {
  render() {
    return (
      <div className="order-wrapper">
        
        <div className='wrapper-form'>
            <Form></Form>
            <img src='https://besplatka.ua/aws/64/18/57/26/trebuetsya-operator-call-centra-photo-a0f6.jpg'></img>
        </div>
      </div>
    );
  }
}

export default Order;
