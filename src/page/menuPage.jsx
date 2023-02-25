import { useEffect } from "react"
import { useLoginStore } from "../hooks/useLoginStore"
import '../styles/menuStyles.css'

const MenuPage = () => {

    const {events,startLogout, user, showValues} = useLoginStore()

    // Cargar los datos de la base de datos
    useEffect(() => {
        showValues()
    },[])

    return(
        <div>
            <h1>Pagina de inicio</h1>
            <p>Bienvenido {user.name}</p>

            

            <table summary="Los grupos de música punk más famosos del Reino Unido">

            <thead>
                <tr>
                    <th scope="col">Nombre De Usuario</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Departamento</th>
                </tr>
            </thead>
            <tbody>

                {events.map(r => (
                        <tr >
                            <th scope="row">{r.name}</th>
                            <td>{r.email}</td>
                            <td>En desarrollo...</td>
                        </tr>
                ))}

            </tbody>

            </table>

            <button onClick={startLogout}>Cerrar Sesion</button>
        </div>
    )
}

export default MenuPage