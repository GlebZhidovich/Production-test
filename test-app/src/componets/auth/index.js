import React from 'react';
import './auth.css';

export default function Auth({activeAuth}) {

  function handleSubmit(event) {
    activeAuth();
    event.preventDefault();
  }

  return (
    <div className={'auth'}>
      <form className={'auth__form'} onSubmit={handleSubmit}>
        <p className="auth__title">Login</p>
        Email:
        <input className={'auth__email'} type="email" required/>
        Password:
        <input className={'auth__password'} type="password"/>
        <button className={'auth__btn'}>Login</button>
      </form>
    </div>
  )
}
