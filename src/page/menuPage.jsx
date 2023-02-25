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
            <h2>Bienvenido {user.name}</h2>
            <table>

            <thead>
                <tr>
                    <th scope="col">Nombre De Usuario</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Departamento</th>
                </tr>
            </thead>
            <tbody>

                {events.map(r => (
                        <tr key={r._id}>
                            <th scope="row">{r.name}</th>
                            <td>{r.email}</td>
                            <td>{r.departament}</td>
                        </tr>
                ))}

            </tbody>

            </table>

            <button onClick={startLogout}>Cerrar Sesion</button>
        </div>
    )
}

export default MenuPage