import { createBrowserRouter } from 'react-router-dom'
import MainPage from 'pages/main'
import TodoPage from 'pages/todo'
import Layout from 'components/Layout'
import PrivateRoute from './private'


// export const router = createBrowserRouter([])
const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/todo/:todoId',
                        element: <TodoPage/>
                    },
                ]
            },
        ]
    }
])

/* 기본값 */
export default router