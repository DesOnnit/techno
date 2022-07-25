import './Input.scss'
export default function Input(props) {
    function InputChange(e){
        props.change(e)
        if(props.validate){
           props.validate(e) 
        }
    }

    return (
        <label className='input__label'>
            <p>{props.title}</p>
            <input className='input' type={props.type} value={props.value || ''} name={props.name} onChange={InputChange} />
            {props.error
                ? <span className='input__error'>{props.error}</span>
                : ''}
        </label>
    )
}