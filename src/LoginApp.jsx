import { Provider } from "react-redux";
import { store } from "./store/store"
import LoginPage from "./page/loginPage";
// hooks
import RouterApp from "./router/RouterApp";
// Librerias para routerDom
import { BrowserRouter } from "react-router-dom";

const LoginApp = () => {
    return (
        // Creacion del provider para poder acceder a los compónentes de redux
        <Provider store={store} > 
            <BrowserRouter>
                <RouterApp/>
            </BrowserRouter>
        </Provider>
    )
}

export default LoginApp