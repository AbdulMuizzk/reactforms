import React,{useState} from "react";
import './form.css';

function Form () {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');

    const handleName = (e)=>{
        setName(e.target.value);
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePass =(e)=>{
        setPass(e.target.value);
    }

    const hanldeSubmit =(e)=>{
        alert('A form was submitted with the Name: '+name+" Email: "+email);
    }

    return (
        <div className="form">
        <img className="educativelogo" src='/logoMarkv2.png'/>   
        <h2 className='heading'>Welcome to Educative Answers</h2>
        <h4 className="heading">Sample-Form</h4>
        <label className='labels'>
            Name:
        </label><br/><br/>
        <input type='text' value = {name} required onChange={(e)=>{handleName(e)}}/><br/>
        <br/>
        <label className='labels'>
            Email:
        </label>
        <br/><br/>
        <input type='email' value = {email} required onChange={(e)=>{handleEmail(e)}}/><br/><br/>
        <label>
            Password:
        </label><br/>
        <br/>
        <input type='password' value = {password} required onChange={(e)=>{handlePass(e)}}/><br/>
        <button type="submit" onClick={(e)=>{hanldeSubmit(e)}}>Submit</button>
        </div>
       
    )
}
export default Form;
