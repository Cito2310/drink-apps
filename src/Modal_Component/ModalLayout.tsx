import { BlackScreen } from '../components/BlackScreen';

import "./modal.scss"

interface props {
    children: JSX.Element | JSX.Element[]
}

export const ModalLayout = ({ children }: props) => (
    <section id='modal-section' className='animate__animated animate__fadeIn'>
        <BlackScreen/>

        <div id="modal-container">
            { children }
        </div>
    </section>
)
