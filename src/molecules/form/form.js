import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import './form.scss'
import { useState } from 'react'
export default function Form() {
    const [values, setValue] = useState({})
    const [comment, setComment] = useState('')
    const [error, setError] = useState({})
    function changeValue(e) {
        const { name, value } = e.target
        setValue({
            ...values,
            [name]: value
        })
    }
    function nameValidator(e) {
        const { name, value } = e.target
        const regex = /[^\-a-zA-Zа-яА-ЯЁё\s]/;
        if (value.trim() === "") {
            setError({
                ...error,
                [name]: "Имя это обязательное поле"
            });
        } else if (regex.test(String(value).toLowerCase())) {
            setError({
                ...error,
                [name]: "Введите корректное имя"
            });
        } else {
            setError({
                ...error,
                [name]: ""
            });
        }
    }
    function emailValidator(e) {
        const { name, value } = e.target
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (value.trim() === "") {
            setError({
                ...error,
                [name]: "Email это обязательное поле"
            });
        } else if (!regex.test(String(value).toLowerCase())) {
            setError({
                ...error,
                [name]: "Введите корректный email"
            });
        } else {
            setError({
                ...error,
                [name]: ""
            });
        }
    }
    return (
        <form className="form">
            <div className="form__heder">
                <h1 className="heder__title">связаться</h1>
                <h1 className="heder__subtitle">с нами</h1>
            </div>
            <div className="form__container">
                <div className="form__inputs">
                    <Input title='Ваше имя' type='text' name="name" value={values.name} validate={nameValidator} change={changeValue} error={error.name} />
                    <Input title='Номер телефона' type='text' name="telephone" value={values.telephone} change={changeValue} />
                    <Input title='Электронная почта' type='email' name="email" value={values.email} validate={emailValidator} change={changeValue} error={error.email} />
                </div>
                <div className="form__connection">
                    <label>
                        <p>Комментарий</p>
                        <textarea className="form__textarea" value={comment} onChange={(e) => setComment(e.target.value)} />
                    </label>
                    <div className="form__buttons">
                        <span className="form__span">Нажимая кнопку “Отправить”, Вы соглашаетесь с политикой конфиденциальности</span>
                        <Button name="Отправить" disabled={(Object.values(error).filter((elem) => elem === '').length === 2 && Object.values(values).length === 3)} form="true" />
                    </div>
                </div>
            </div>
        </form>
    )
}