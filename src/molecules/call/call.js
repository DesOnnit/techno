import './call.scss'
import Form from '../form/form'
import close from './imgs/close.svg'
import { useSelector, useDispatch } from 'react-redux'
export default function Call (){
    const status = useSelector(state => state.call)
    const dispatch = useDispatch()

    return (
        <div className={status ? 'call' : 'call call__disabled'}>
            <div className="call__content">
              <Form/>
              <img src={close} className="call__close" onClick={() => dispatch({ type: 'call_close' })} />  
            </div>
        </div>
    )
}