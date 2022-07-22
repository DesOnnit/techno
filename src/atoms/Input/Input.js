import './Input.scss'
export default function Input(props) {
    return (
        <label className='input__label'>
            <p>{props.title}</p>
            <input className='input' type={props.type} value={props.value || ''} name={props.name} onChange={(e)=>props.change(e)} />
            {props.error
                ? <span className='input__error'>{props.error}</span>
                : ''}
        </label>
    )
}