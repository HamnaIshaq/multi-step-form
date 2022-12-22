import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import InputField from '../components/InputField';

const PersonalInfo = () => {
  const [input, setInput] = useState({ name: '', email: '', phoneNumber: '' }); 
  const [error, setError] = useState({ name: '', email: '', phoneNumber: ''});
  const navigate = useNavigate();

  const validEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  const validPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\+(?:[0-9]\s?){6,14}[0-9]$/;
    return phoneNumberRegex.test(phoneNumber)
  }

  const validInputHandler = (e) => {
    e.preventDefault();
    if(input.name.trim().length === 0) {
      setError({ ...error, name: 'This field is required'});
    }
    else if(input.email.trim().length === 0) {
      setError({ ...error, email: 'This field is required'});
    }
    else if(!validEmail(input.email)) {
      setError({ ...error, email: 'Please enter a valid email e.g. stephenking@lorem.com'});
    }
    else if(input.phoneNumber.trim().length === 0) {
      setError({ ...error, phoneNumber: 'This field is required'});
    }
    else if(!validPhoneNumber(input.phoneNumber)) {
      setError({ ...error, phoneNumber: 'Please enter phone number in this format: +1 234 567 890'});
    }
    else {
      navigate('/selectplan');
    }
  }
  
  return (
    <>
      <Card heading="Personal info" description="Please provide your name, email address, and phone number.">
        <form id="personal-info">
          <InputField 
            label="Name"
            type="text"
            placeholder="e.g. Stephen King"
            inputName="name"
            input={input}
            setInput={setInput}
            title="Please fill out this field. e.g. Stephen King"
            error={error}
            setError={setError}
          />
          <InputField 
            label="Email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            inputName="email"
            input={input}
            setInput={setInput}
            title="Please fill this field with a valid email. e.g. stephenking@lorem.com"
            error={error}
            setError={setError}
          />
          <InputField 
            label="Phone Number"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            inputName="phoneNumber"
            input={input}
            setInput={setInput}
            title="Please fill this field with a phone number. E.g. +1 234 567 890"  
            error={error}
            setError={setError}
          />
        </form>
      </Card>
      <div className="form-footer-container flex justify-end">
        <Link> 
          <button type="submit" className="btn next-btn" form="personal-info" onClick={validInputHandler}>Next Step</button>
        </Link>
      </div>
      
    </>
  );
}

export default PersonalInfo;