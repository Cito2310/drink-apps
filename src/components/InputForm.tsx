interface props {
    label?: string,
    name: string,
    onInput: ( event: React.ChangeEvent<HTMLInputElement> ) => void
    placeholder?: string,
    type: "text" | "password" | "number",
    value: string | number,
    hasError?: string,
    limit?: [ number, number ]
}

export const InputForm = ({ type, placeholder, label, onInput, name, value, hasError, limit }: props) => {
    return (
        <div className="flex flex-col">
            
            { label && <label className="ml-1.5">{ label }</label> }

            <input 
                className={`
                    rounded-md p-1.5 px-3 bg-card_bg brightness-95 focus:outline-none border border-backgroundColor
                    ${ hasError && "border-red-600 text-red-600" }
                `}
                name={ name }
                onInput={ onInput }
                placeholder={ placeholder }
                type={ type } 
                value={ value }
                min={ limit && limit[0] }
                max={ limit && limit[1] }
            />

            <p className="text-red-600 text-s ml-2 mt-0.5">{ hasError }</p>
        </div>
    )
}