import "./modal.scss"
import { BlackScreen } from '../components/BlackScreen';

export const Modal = () => {
    return (
        <>
            <BlackScreen/>
            <div id="modal-container">
                <div id="modal-top">
                    <p>Seguro que desea eliminar este producto?</p>
                </div>

                <div id="modal-buttons">
                    <button className="color-first">Si</button>
                    <button className="color-secondary">No</button>
                </div>

            </div>
        </>
    )
}