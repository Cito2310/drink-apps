export interface ButtonProps {
    label: string,
    func?: () => void,
    color: "danger" | "primary" | "secondary",
    type?: "submit" | "button",
}

export const Button = ({ color, func, label, type = "button" }: ButtonProps) => {
    return (
        <button className={`
            rounded-md p-1 px-3 transition-base w-[100px] hover:brightness-[.80]
            ${ color === "danger" && "bg-red-600 text-white" }
            ${ color === "primary" && "bg-blue-500 text-white" }
            ${ color === "secondary" && "bg-backgroundColor text-black" }
        `}
        type={ type }
        onClick={ func }
        >
            { label }
        </button> 
    )
}