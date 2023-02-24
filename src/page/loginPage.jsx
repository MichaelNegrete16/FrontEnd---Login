const LoginPage = () => {

    return (
        <div>
            <div>
                <h1>Login</h1>
                <form>
                    <div>
                        <input type="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Contraseña"/>
                    </div>
                    <div>
                        <input type="submit" value='Login'/>
                    </div>
                </form>
            </div>

            <div>
                <h1>Registro</h1>
                <form>
                    <div>
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div>
                        <input type="email" placeholder="Correo" />
                    </div>
                    <div>
                        <input type="password" placeholder="Contraseña" />
                    </div>
                    <div>
                        <input type="password" placeholder="Repita la contraseña" />
                    </div>
                    <div>
                        <input type='submit' value='Registrar' />
                    </div>
                </form>
            </div>

        </div>
    )

}

export default LoginPage