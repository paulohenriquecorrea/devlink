import {createBrowserRouter} from 'react-router-dom';

import {Home} from './pages/home';
import {Admin} from './pages/admin';
import {Login} from './pages/login';
import {Networks} from './pages/networks';

const router = createBrowserRouter([
    {
        children: [
            {
                element: <Home />,
                path: '/'
            },
            {
                element: <Admin />,
                path: '/admin'
            },
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <Networks />,
                path:'/networks'
            }
        ]
    }
])

export {router}