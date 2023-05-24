import { Button, ButtonProps, BlackScreen } from '../components';

interface props {
    buttons?: ButtonProps[],
    children: JSX.Element | JSX.Element[],
    onExit?: () => void,
    onSubmit?: ( event: React.FormEvent<HTMLFormElement> ) => void,
    title: string,
}

export const LayoutModal = ({ children, title, buttons, onExit, onSubmit }: props) => {
    return (
        <>
            <div className="
                bg-card_bg fixed top-12 z-10 p-4 rounded-md left-[50%] translate-x-[-50%]
                w-[32em] flex flex-col
                sm:w-[95vw] md:[95vw]
            ">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-normal">{ title }</h1>
                    {
                        onExit &&
                        <button onClick={ onExit } className="text-2xl text-gray-400 hover:brightness-75">
                            <i className="fa-solid fa-xmark"/>
                        </button>
                    }
                </div>
                <form onSubmit={ onSubmit }>

                    { children }

                    <div className="flex gap-3 mt-3 justify-end">
                        {
                            buttons?.map( buttonProps => <Button {...buttonProps} /> )
                        }
                    </div>

                </form>
            </div>


            <BlackScreen onClick={onExit} />
        </>
    )
}