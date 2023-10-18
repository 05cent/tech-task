import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import userAuthStore from './store/store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={userAuthStore}>
        <App />
    </Provider>
);
