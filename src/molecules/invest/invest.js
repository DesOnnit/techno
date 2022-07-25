import './invest.scss'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import close from './imgs/close.svg'
export default function Invest() {
    const [values, setValue] = useState({})
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
    const status = useSelector(state => state.invest)
    const dispatch = useDispatch()
    return (
        <div className={status ? 'invest' : 'invest invest__disabled'}>
            <div className='invest__content'>
                <div className='invest__container'>
                    <h2>Инвестировать в проект</h2>
                    <div className='invest__inputs'>
                        <Input title='Ваше имя' type='text' name="name" value={values.name} validate={nameValidator} change={changeValue} error={error.name} />
                        <Input title='Номер телефона' type='text' name="telephone" value={values.telephone} change={changeValue} />
                        <Input title='Электронная почта' type='email' name="email" value={values.email} validate={emailValidator} change={changeValue} error={error.email} />
                    </div>
                    <div className='invest__submit'>
                        <span className='invest__span'>Нажимая кнопку, Вы соглашаетесь с политикой конфиденциальности</span>
                        <Button name="Инвестировать в проект" disabled={(Object.values(error).filter((elem) => elem === '').length === 2 && Object.values(values).length === 3)}form="true" />
                    </div>
                    <img src={close} alt='Закрыть' className='invest__close' onClick={() => dispatch({ type: 'invest_close' })} />
                </div>
            </div>
        </div>
    )
}