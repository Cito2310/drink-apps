interface props {
    label: string,
    nameInput: string,
    onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
    value: number,
    min?: number,
    max?: number,
}

export const FormInputNumber = ({ label, value, onInputChange, nameInput, min, max }: props) => (
    <div className='form-input'>
        <label>{label}</label>
        
        <input 
            type="number" 
            name={nameInput} 
            value={value} 
            onChange={onInputChange}
            min={min} max={max}
        />
    </div>
)
