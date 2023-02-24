import { useLoginStore } from "../hooks/useLoginStore"

const MenuPage = () => {

    const {startLogout, user} = useLoginStore()

    return(
        <div>
            <h1>Pagina de inicio</h1>
            <p>Bienvenido {user.name}</p>
            <button onClick={startLogout}>Cerrar Sesion</button>
        </div>
    )
}

export default MenuPage