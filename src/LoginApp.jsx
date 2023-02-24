import { Provider } from "react-redux";
import { store } from "./store/store"
import LoginPage from "./page/loginPage";

const LoginApp = () => {
    return (
        // Creacion del provider para poder acceder a los compónentes de redux
        <Provider store={store} > <LoginPage/> </Provider>
    )
}

export default LoginApp