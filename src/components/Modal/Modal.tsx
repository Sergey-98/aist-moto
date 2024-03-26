import React, { useContext, useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import { Context } from '../../Context/Context';
import Close from '../UI/Button/Close';
import Input from 'components/UI/Input/Input';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import modalImg from '../../assets/img/modalImg.png';

export default function Modal() {
  const { formState, formDispatch, state, dispatch } = useContext(Context);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
    if (dispatch) {
        dispatch({ type: 'resetModal', payload: { isOpenModal: true } });
    }
    }, 15000);
    return () => clearTimeout(timer);
}, [dispatch]);
  // login: avanttehnooleg@yandex.ru
  
  const sendEmail = (event: React.FormEvent) => {
    // {/* TODO: раскомментировать всю функцию и 2 импорта*/}
    event.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_ksceqzu', 'template_8d5afbm', form.current, 'a16Nmw3f7CqETrIRS')
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire('Good job!', 'Ваша заявка успешно отправлена', 'success');
            resetForm();
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Сервис временно недоступен. Попробуйте повторить запрос через несколько минут',
            });
          }
        );
    }
  };
  const checkNumber = () => {
    const reg = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    const valid = reg.test(String(formState.phoneNumber));
    if (!valid) {
      if (formDispatch) {
        formDispatch({
          type: 'errorNumber',
          payloadForm: { errorNumber: 'формат: 71234567890' },
        });
      }
    } else {
      if (formDispatch) {
        formDispatch({
          type: 'errorNumber',
          payloadForm: { errorNumber: '' },
        });
      }
    }
  };
  const checkEmail = () => {
    const reg =
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
    const valid = reg.test(String(formState.email));
    if (!valid) {
      if (formDispatch) {
        formDispatch({
          type: 'errorEmail',
          payloadForm: { errorEmail: 'неверный формат' },
        });
      }
    } else {
      if (formDispatch) {
        formDispatch({
          type: 'errorEmail',
          payloadForm: { errorEmail: '' },
        });
      }
    }
  };
  
  const resetForm = () => {
    if (formDispatch) {
      form.current?.reset();
      formDispatch({ type: 'model', payloadForm: { model: '' } });
      formDispatch({ type: 'name', payloadForm: { name: '' } });
      formDispatch({ type: 'phoneNumber', payloadForm: { phoneNumber: '' } });
      formDispatch({ type: 'email', payloadForm: { email: '' } });
      formDispatch({ type: 'message', payloadForm: { message: '' } });
      formDispatch({ type: 'errorNumber', payloadForm: { errorNumber: '' } });
      formDispatch({ type: 'errorEmail', payloadForm: { errorEmail: '' } });
      dispatch({ type: 'resetModal', payload: { isOpenModal: false } });
    }
  };
  const inputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formDispatch) {
      formDispatch({ type: 'name', payloadForm: { name: event.target.value } });
    }
  };
  const inputNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formDispatch) {
      formDispatch({ type: 'phoneNumber', payloadForm: { phoneNumber: event.target.value } });
    }
  };
  const inputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formDispatch) {
      formDispatch({ type: 'email', payloadForm: { email: event.target.value } });
    }
  };
  const inputMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (formDispatch) {
      formDispatch({ type: 'message', payloadForm: { message: event.target.value } });
    }
  };
  const changeModal = () => {
    if (state.isOpenModal) {
      if (dispatch) {
        dispatch({ type: 'resetModal', payload: { isOpenModal: false } });
      }
    } else {
      if (dispatch) {
        dispatch({ type: 'resetModal', payload: { isOpenModal: true } });
      }
    }
  };

  return state.isOpenModal ? (
    <section className={styles.modal_container}>
      <span className={styles.modal_close}>
        <Close onClick={changeModal}></Close>
      </span>
      <div className={styles.modal_form_wrapper}>
        <img src={modalImg} alt={"Модальное окно для техники Lonking"} className={styles.modal_img}></img>
        <form className={styles.modal_container__form } onSubmit={sendEmail} ref={form}>
          <h2 className={styles.modal_title}>
            Оставьте Ваши контактные данные и мы свяжемся с Вами в кратчайшие сроки!
          </h2>
          <Input 
            className={styles.input__text} 
            value={formState.name} 
            name={"name"} 
            placeholder={'Имя'}
            classNameError={formState.errorName}
            errorMessage={formState.errorName}
            onChange={inputText}
          />
          <Input 
            className={styles.input__text} 
            value={formState.phoneNumber} 
            name={"phone"} 
            placeholder={'Номер телефона'}
            classNameError={formState.errorNumber}
            errorMessage={formState.errorNumber}
            onChange={inputNumber}
            onBlur={checkNumber}
          />
          <Input 
            className={styles.input__text} 
            value={formState.email} 
            name={"email"} 
            placeholder={'e-mail'}
            classNameError={formState.errorEmail}
            errorMessage={formState.errorEmail}
            onChange={inputEmail}
            onBlur={checkEmail}
          />
          <Input 
            className={styles.input__text} 
            value={formState.message} 
            name={"message"} 
            placeholder={'Ваше сообщение'}
            classNameError={formState.errorMessage}
            errorMessage={formState.errorMessage}
            onChange={inputMessage}
          />
          <input className={styles.input__submit} value={'Отправить'} type={'submit'} />
        </form>
      </div>
      
    </section>
  ) : null
}
