import React from 'react';
import { useState } from 'react';
import{ usernameValidator} from './components/validation';
import { emailValidator } from './components/validation';
import { passwordValidator } from './components/validation';
import './App.css';

function App() {

  const[input,setInput]=useState({username:'',email:'',password:''})
  const[errormsg,setErrormsg]=useState('');
  const[successmgs,setSuccessmgs]=useState('')
  
  const handleChange=(e)=>{
    setInput({...input,[e.target.name]: e.target.value})
  }

  const formSubmit=(e)=>{
    e.preventDefault();
    setErrormsg('')
    setSuccessmgs('')
    if(!usernameValidator(input.username)) 
    return setErrormsg('please enter valid username');
    // console.log(usernameValidator);
    // console.log(validate);
    if(!emailValidator(input.email))
     return setErrormsg('Please enter valid email');
    //  console.log(emailValidator);
     
     if(!passwordValidator(input.password)) 
     return setErrormsg('Password should contain minimum 8 character with uppercase,lowercase,numbers and special characters');
    //  console.log(passwordValidator);
    console.log(input);
    setSuccessmgs('Successfully validated')
    };

  return (
    <div className="App">
      <p>LOGIN FORM</p>
      <form onSubmit={formSubmit}>
        {errormsg.length > 0 && (<div style={{marginBottom:'20px',color:'white'}} className='error'>{errormsg}</div>)}
        {successmgs.length > 0 && (<div style={{marginBottom:'20px',color:'white'}} className='success'>{successmgs}</div>)}
        <div className='input-field'>
        <i className="fa fa-user"></i>
        <input type='text' name='username' placeholder='Username' onChange={handleChange} />
        </div>
        <div className='input-field'>
        <i className="fa fa-envelope"></i>
        <input type='text' name='email' placeholder='E-mail'onChange={handleChange} />
        </div>
        <div className='input-field'>
        <i className="fa fa-unlock-alt"></i>
        <input type='password' name='password' placeholder='Password'onChange={handleChange} />
        </div>
        <input type='submit' value='LOGIN' className='submit' />
      </form>
    </div>
  );
}

export default App;
