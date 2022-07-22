import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import './form.scss'
import { useState } from 'react'
export default function Form() {
    const [values, setValue] = useState({})
    const [comment, setComment] = useState('')
    function changeValue(e) {
        const { name, value } = e.target
        setValue({
            ...values,
            [name]: value
        })
    }
    return (
        <form className="form">
            <div className="form__heder">
                <h1 className="heder__title">связаться</h1>
                <h1 className="heder__subtitle">с нами</h1>
            </div>
            <div className="form__container">
                <div className="form__inputs">
                    <Input title='Ваше имя' type='text' name="name" value={values.name} change={changeValue} />
                    <Input title='Номер телефона' type='text' name="telephone" value={values.telephone} change={changeValue} />
                    <Input title='Электронная почта' type='email' name="email" value={values.email} change={changeValue} />
                </div>
                <div className="form__connection">
                    <label>
                        <p>Комментарий</p>
                        <textarea className="form__textarea" value={comment} onChange={(e) => setComment(e.target.value)} />
                    </label>
                    <div className="form__buttons">
                        <span className="form__span">Нажимая кнопку “Отправить”, Вы соглашаетесь с политикой конфиденциальности</span>
                        <Button name="Отправить" />
                    </div>
                </div>
            </div>
        </form>
    )
}