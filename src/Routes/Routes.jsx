import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Users from "../components/Users";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/users',
        element: <Users />,
        loader: () => fetch('http://localhost:3000/users')
    }
])