import "./style.css"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


import {validateEmail } from '../../util/helpers';



const contact = () =>{
    
    
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message,setMessage]=useState('');


    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'name') {
            setName(inputValue);
          } else if( inputType ==='message'){
            setMessage(inputValue);
          }
        };
      

    const handleFormSubmit = (e) => {
     
        e.preventDefault();
    
        if (!validateEmail(email)) {
          setErrorMessage('Email  invalid');
          return;
    
        }
    }

    const handleTextChange = (e) =>{
      if(!e.target.value){
        return setErrorMessage(e.target.name + " cannot be empty")
      }
      if(!email){
        setErrorMessage("email cannot be empty!");
      }else if (!name){
        setErrorMessage("name cannot be empty");
      }else if(!message){
        setErrorMessage("Message cannot be empty");
      }
    }


    return(
        <div class="container">
          <form className="form" >
            <h1>Name:</h1>
           <input
            onChange={handleInputChange}
             placeholder="Name"
             value={name}
              name="name"
            type='text'
             onBlue = {handleTextChange}
           />
          <h1>Email:</h1>
         <input
            onChange={handleInputChange}
            type="email"
            value={email}
            name="email"
            placeholder="email"
            onBlur = {handleTextChange}
        />
        <h1>Message:</h1>
        <input 
        className="input"
        onChange={handleInputChange}
        type="text"
        value={message}
        name="message"
        placeholder="type your message"
        onBlur={handleTextChange}></input>
      
        <Button variant="info" type="button" onClick={handleFormSubmit}>Submit</Button>
        
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    )
}

export default contact;