import React from 'react';
import style from './Input.module.css';

type InputProps = {
    className?: string,
    value?: string,
    name?: string,
    placeholder?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: () => void,
    classNameError?: string,
    errorMessage?: string
}
export default function Input({...props}: InputProps) {
    return (
    <label className={style.label_form}>
        <input
            className={props.className}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            autoComplete="nope"
            type="text"
            onChange={props.onChange}
        />
        <span className={props.classNameError ? 'error-text' : 'none'}>
            {props.errorMessage}
        </span>
    </label>) 
    
    // <input className={style.input} />
}

{/* <Input 
    className = {style.input__text} 
    value = {formState.message} 
    name = {"message"} 
    placeholder = {'Ваше сообщение'}
    classNameError = {formState.errorMessage}
    errorMessage = {formState.errorMessage}
/> */}