interface props {
    label: string,
    name: string,
    onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

export const FormInputText = ({ label, value, onInputChange }: props) => {
    return (
        <div className='form-input-text'>
            <label>{label}</label>
            <input type="text" name='brand' value={value} onChange={onInputChange}/>
        </div>
    )
}
