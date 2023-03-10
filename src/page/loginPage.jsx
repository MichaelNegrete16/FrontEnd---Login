// Hooks
import { useForm } from "../hooks/useform"
import { useLoginStore } from "../hooks/useLoginStore"

// Hoja de estilos
import '../styles/loginStyles.css'
// Alertas y librerias
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import Select from "react-select";

// Objetos con los datos a tomar
const loginFormField = {
    loginEmail: '',
    loginPassword: ''
}

const registerFormField = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}

const option = [
    {
      label: "Cundinamarca",
      value: "cundinamarca",
    },
    {
      label: "Guainía",
      value: "guainía",
    },
    {
      label: "Bolivar",
      value: "bolivar",
    },
    {
      label: "Boyaca",
      value: "boyaca",
    },
  ]


const LoginPage = () => {



    const {startLogin,startRegistro,errorMessage} = useLoginStore()

    const {loginEmail, loginPassword, onInputChange: onLoginInputChange}  = useForm(loginFormField)
    const {registerName, registerEmail, registerPassword, registerPassword2, onInputChange: onRegisterInputChange} = useForm(registerFormField)

    const [selected, setSelected] = useState();

    const handleChange = (selectedOption) => {
        setSelected(selectedOption.value);
        // console.log(`Option selected:`, selected);
      };

    const loginSubmit = e => {
        e.preventDefault()
        // TODO: Mandar los datos al login
        startLogin({email: loginEmail, password: loginPassword})
    }

    const registerSubnmit = e => {
        e.preventDefault()
        // Verificar que las contraseñas sean iguales
        if(registerPassword !== registerPassword2){
            Swal.fire('Error en la autenticacion','Las contrtaseñas deben ser iguales','error')
            return
        }
        console.log(selected);
        // TODO: Mandar los datos a la base de datos del registro
        startRegistro({name:registerName, email:registerEmail, password:registerPassword, departament:selected})
    }

    // TODO: Hacer una autenticacion
    useEffect(() => {
        if(errorMessage !== undefined){
            // console.log(errorMessage.msg);
            Swal.fire('Error en la autenticacion', 'Verifique que los datos esten correctos', 'error')
        }
    }, [errorMessage])

    return (
        <div className="container">

            <div className="containerLogin">
                <h1>Login</h1>
                <form onSubmit={loginSubmit}>
                    <div className="emailData">
                        <input type="email" 
                               placeholder="ejemplo@ejemplo.com"
                               name='loginEmail'
                               value={loginEmail}
                               onChange={onLoginInputChange}/>
                    </div>
                    <div className="passwordData">
                        <input type="password" 
                               placeholder="Contraseña"
                               name='loginPassword'
                               value={loginPassword}
                               onChange={onLoginInputChange} />
                    </div>
                    <div className="btnSubmit">
                        <input type="submit" value='Login' className="btnSubmit"/>
                    </div>
                </form>
            </div>

            <div className="containerRegistro">
                <h1>Registro</h1>
                <form onSubmit={registerSubnmit}>
                    <div>
                        <input type="text" 
                               placeholder="Nombre"
                               name='registerName'
                               value={registerName}
                               onChange={onRegisterInputChange} />
                    </div>
                    <div>
                        <input type="email" 
                               placeholder="Correo"
                               name='registerEmail'
                               value={registerEmail}
                               onChange={onRegisterInputChange} />
                    </div>
                    <div>
                        <input type="password" 
                               placeholder="Contraseña" 
                               name='registerPassword'
                               value={registerPassword}
                               onChange={onRegisterInputChange}/>
                    </div>
                    <div>
                        <input type="password" 
                               placeholder="Repita la contraseña"
                               name='registerPassword2'
                               value={registerPassword2}
                               onChange={onRegisterInputChange} />
                    </div>

                    <div className="select">
                        <Select options={option} onChange={handleChange} autoFocus={true}></Select>
                    </div>

                    <div className="btnSubmit">
                        <input type='submit' value='Registrar' className="btnRegister"/>
                    </div>
                </form>
            </div>

        </div>
    )

}

export default LoginPage