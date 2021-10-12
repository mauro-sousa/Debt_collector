import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h2>
            Create your account by filling out the
            information below.
        </h2>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Name: </label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Surname: </label>
          <input
            className='form-input'
            type='text'
            name='surname'
            placeholder='Enter your surname'
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && <p>{errors.surname}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>ID number</label>
          <input
            className='form-input'
            type='text'
            name='id_number'
            placeholder='Enter your id_number'
            value={values.id_number}
            onChange={handleChange}
          />
          {errors.id_number && <p>{errors.id_number}</p>}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Password :</label>
          <input
            className='form-input'
            type='text'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Password :</label>
          <input
            className='form-input'
            type='text'
            name='password2'
            placeholder='confirm password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>


        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;