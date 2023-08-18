import {React, useState} from "react";
import './login.css';
import {Link, NavLink} from 'react-router-dom';
import Logo from '../../images/logo.svg';
import {useFormWithValidation} from '../../utils/Validation';

function Login({onLogin, errorMessage, setErrorMessage}) {

  const {values, errors, isValid, handleChange} = useFormWithValidation();
  const [disabled, setDisabled] = useState(false);

  function handleLogin(evt) {
    setDisabled(true);
    evt.preventDefault();
    onLogin(values.password, values.email);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  }

  function handleInputsChange(evt) {
    handleChange(evt);
    cleanErrorMessage();
  }

  function cleanErrorMessage() {
    setErrorMessage('');
  }

  return (
    <main>
      <section className="login">
        <div className="login__header">
          <NavLink className="login__logo-link" exact to="/">
            <img className="login__logo" src={Logo} alt="Логотип"/>
          </NavLink>
          <h1 className="login__title">Рады видеть!</h1>
        </div>
        <form className="login__form" onSubmit={handleLogin}>
          <label className='login__container'>
            <span className='login__input-name'>E-mail</span>
            <input type='email' name='email' placeholder='Email' className='login__input' value={values.email || ""}
                   onChange={handleInputsChange} minLength={5} maxLength={30}
                   pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" required disabled={disabled}/>
            <span className='login__error'>{errors.email}</span>
          </label>
          <label className='login__container'>
            <span className='login__input-name'>Пароль</span>
            <input type='password' name='password' placeholder='Пароль' className='login__input'
                   value={values.password || ""}
                   minLength={8} maxLength={30} onChange={handleInputsChange} required disabled={disabled}/>
            <span className='login__error'>{errors.password}</span>
          </label>
          <p className={`login__error-message ${errorMessage && 'login__error-message_visible'}`}>{errorMessage}</p>
          <button type="submit" className={`login__button ${!isValid && 'login__button_disabled'}`}
                  disabled={!isValid || disabled} title="Войти">Войти
          </button>
        </form>
        <div className="login__quest">
          <p className="login__guest-text">Ещё не зарегистрированы?</p>
          <Link to='/signup' className="login__link" onClick={cleanErrorMessage}>Регистрация</Link>
        </div>
      </section>
    </main>
  );
}

export default Login;
