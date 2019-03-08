import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './inputStyle.css';
import 'react-notifications/lib/notifications.css';
class Form extends Component {
  state ={
    nameValidate: true,
    surNameValidate: true,
    questionValidate: true,
    emailValidateFirst: true,
    emailValidateSecond: true,  
    valid: false    
  }
    submirForm = () =>{
        let name = document.getElementById('name').value
        let surname = document.getElementById('surname').value
        let question = document.getElementById('question').value
        let email = document.getElementById('email').value

        if(name===''){
            this.setState({nameValidate: false})
        }else{
            this.setState({nameValidate: true})
        }
        if(surname===''){
                this.setState({surNameValidate: false})
        }else{
            this.setState({surNameValidate: true})
        }
        if(question===''){
            this.setState({questionValidate: false})
        }else{
            this.setState({questionValidate: true})
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email===''){
            this.setState({emailValidateFirst: false})
        }else{
            this.setState({emailValidateFirst: true})
            if(!re.test(String(email).toLowerCase())){
                this.setState({emailValidateSecond: false})
            }else{
                this.setState({emailValidateSecond: true})
            } 
        }
        if(email!=='' && surname !=='' && question !=='' && question !=='' && email !=='' && re.test(String(email).toLowerCase())){
            
                    
            NotificationManager.success('Дані успішно відправлено' );
                      
                    
                 
            
            document.getElementById('name').value=''
            document.getElementById('surname').value=''
            document.getElementById('question').value=''
            document.getElementById('email').value=''
        }
        
  }  

  render() {
      const { nameValidate,
        surNameValidate,
        questionValidate,
        emailValidateFirst,
        emailValidateSecond }=this.state
    return (
        <div className='form'>
            <div className='title'>Для получення детальнішої інформаці заповніть форму і ми з Вами зв'яжемся</div>
            <form className='form-wrapper' onSubmit={this.submirForm}>
           <label class="field a-field a-field_a3 page__field">
                <input id='name' class="field__input a-field__input" placeholder="Ім'я" />
                <span class="a-field__label-wrap">
                    <span class="a-field__label">Ім'я</span>
                </span>
            </label>
            {!nameValidate && <div className='validate'>Заповніть, будь ласка, дане поле</div>}
            <label class="field a-field a-field_a3 page__field">
                <input id='surname' class="field__input a-field__input" placeholder="Прізвище" />
                <span class="a-field__label-wrap">
                    <span class="a-field__label">Прізвище</span>
                </span>
            </label>
            {!surNameValidate && <div className='validate'>Заповніть, будь ласка, дане поле</div>}
            <label class="field a-field a-field_a3 page__field">
                <input id='question' class="field__input a-field__input" placeholder="Що вас цікавить?" />
                <span class="a-field__label-wrap">
                    <span class="a-field__label">Що вас цікавить?</span>
                </span>
            </label>
            {!questionValidate && <div className='validate'>Заповніть, будь ласка, дане поле</div>}
            <label class="field a-field a-field_a3 page__field">
                <input id='email' class="field__input a-field__input" placeholder="E-mail" />
                <span class="a-field__label-wrap">
                    <span class="a-field__label">E-mail</span>
                </span>
            </label>
            {
                !emailValidateFirst ? <div className='validate'>Заповніть, будь ласка, дане поле</div> :null
                
            }
            {!emailValidateSecond ? <div className='validate'>Введіть коректну електронну пошту</div> :null}
            
            <input type='submit' className="button button1"/>
        </form>
        <NotificationContainer/>
        </div>
        
        
        

    );
  }
}

export default Form;
