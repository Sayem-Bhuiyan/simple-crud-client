import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Users from "../components/Users";
import Update from "../components/Update";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/users',
        element: <Users />,
        loader: () => fetch('http://localhost:3000/users')
    },
    {
        path: '/update/:id',
        element: <Update />,
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
    }
])