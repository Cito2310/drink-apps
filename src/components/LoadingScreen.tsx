import "../styles/loading-screen.scss"

export const LoadingScreen = () => {
    return (
        <div id="loading-screen">
            <div id="container-loading">
                <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>

                <p className="text-loading">Cargando<br/>Disculpe la espera</p>
            </div>
        </div>
    )
}