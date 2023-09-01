import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from "react-redux";
import userAuthStore from "./store/store.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={userAuthStore}>
        <App />
    </Provider>
);
