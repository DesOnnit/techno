import './invest.scss'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import close from './imgs/close.svg'
export default function Invest() {
    const [values, setValue] = useState({})
    function changeValue(e) {
        const { name, value } = e.target
        setValue({
            ...values,
            [name]: value
        })
    }
    const status = useSelector(state => state.invest)
    const dispatch = useDispatch()
    return (
        <div className={status ? 'invest' : 'invest invest__disabled'}>
            <div className='invest__content'>
                <div className='invest__container'>
                    <h2>Инвестировать в проект</h2>
                    <div className='invest__inputs'>
                        <Input title='Ваше имя' type='text' name="name" value={values.name} change={changeValue} />
                        <Input title='Номер телефона' type='text' name="telephone" value={values.telephone} change={changeValue} />
                        <Input title='Электронная почта' type='email' name="email" value={values.email} change={changeValue} />
                    </div>
                    <div className='invest__submit'>
                        <span className='invest__span'>Нажимая кнопку, Вы соглашаетесь с политикой конфиденциальности</span>
                        <Button name="Инвестировать в проект" />
                    </div>
                    <img src={close} alt='Закрыть' className='invest__close' onClick={() => dispatch({ type: 'invest_close' })} />
                </div>
            </div>
        </div>
    )
}