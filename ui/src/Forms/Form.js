import React, { useState } from 'react';
import './Form.css';
import FormSignUp from './FormSignUp';
import FormLogged from './FormLogged';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='images/T.svg' alt='WyteNomo   ' />
        </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormLogged />
        )}
      </div>
    </>
  );
};

export default Form;