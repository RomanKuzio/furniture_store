import React, { Component } from 'react';
import './style.css';


class Price extends Component {
  render() {
    return (
        
      <div className="price-table-wrapper">
        <table border='1'>
        <caption>Таблиця послуг та цін</caption>
            <tr>
                <td></td>
                <td className='first'> Доставка</td>
                <td className='first'>Збір</td>
                <td className='first'>Установка</td>
                <td className='first'>Загалом</td>
            </tr>
            <tr>
                <td>Кухня</td>
                <td>200-400грн</td>
                <td>400-600грн</td>
                <td>230-350грн</td>
                <td>≈1000грн</td>
            </tr>
            <tr>
                <td>Спальня</td>
                <td>150-400грн</td>
                <td>200-400грн</td>
                <td>100-200грн</td>
                <td>≈650грн</td>
            </tr>
            <tr>
                <td>Вітальня</td>
                <td>200-500грн</td>
                <td>200-350грн</td>
                <td>150-300грн</td>
                <td>≈700грн</td>
            </tr>
            <tr>
                <td>Коридор</td>
                <td>200-500грн</td>
                <td>250-350грн</td>
                <td>100-250грн</td>
                <td>≈750грн</td>
            </tr>
        </table>

        
      </div>
      
    );
  }
}

export default Price;
