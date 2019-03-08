import React, { Component } from 'react';
import ProductList from './productList'
import AboutUs from './aboutUs'
import ScrollableAnchor from 'react-scrollable-anchor'
import Select from 'react-select';
import './App.css';
import Order from './order'
import Price from './price'

const arr =[
  { value: 'black', label: 'black' },
  { value: 'red', label: 'red' },
  { value: 'yellow', label: 'yellow' },
  { value: 'green', label: 'green' }
]

class App extends Component {
  state={
    color: 'black'
  }
  changeTitle = (color) =>{
    this.setState({color: color})
  }
  up = () =>{
    window.scrollTo(0, 0);
  }
  render() {
    console.log(window.scrollX )
    return (  
      <div className="App">
        <header className="app-header">
        <Select
          className="basic-single dropdown"
          classNamePrefix="select"
          onChange={(value)=>this.changeTitle(value.value)} 
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          name="color" 
          defaultValue={arr[0]}
          options={arr}
        />
          <div style={{color: this.state.color}} className='header-title'>Салон меблів</div>
          <div className='header-menu'>
            <a href='#products' className='link'><div>Список товарів</div></a>
            <a href='#order'  className='link'>Замовлення</a>
            <a href='#aboutUs' className='link'>Про нас</a>
            <a href='#price' className='link'>Послуги</a>
          </div>
        </header>
        <ScrollableAnchor id={'products'}>
          <ProductList/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'aboutUs'}>
          <AboutUs/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'order'}>
          <Order/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'price'}>
          <Price />
        </ScrollableAnchor>
        <footer className='app-footer'>
          <div className='footer-title'>
            Наші контакти
          </div>
          <div className='contact'>
            <div>
              <a>
                Телефон
                <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/1/15/1195445181899094722molumen_phone_icon.svg.hi.png'></img>
                : 2458759542
              </a>
            </div>
            <div>
            <a className='conact-info' href='https://www.google.com/intl/ru/gmail/about/' target='_blank'>
                Пошта
                <img className='img' src='http://theharvestchurch.tv/wp-content/uploads/2018/09/envelope-icon-png-transparent-6.png'></img>
                : mebli@gmai.com
              </a>
            </div>
            <div>
              <a className='conact-info' href='https://www.instagram.com' target='_blank'>
                Інстаграм
                <img className='img' src='https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-512.png'></img>
                : salonMebliv
              </a>
            </div>
          </div>
        </footer>
     
            <div 
          className='up-btn' 
          onClick={this.up}
        >
          <img 
            style={{width:'65%'}} 
            src='https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/arrow-alt-up.png'
          />
        </div>
        
          
      </div>
      
      
    );
  }
}

export default App;
