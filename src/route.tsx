import Home from './components/home/index'
import Login from './components/login/index'
import New from './components/new/index'
import Products from './components/products/index'
import { RouteConfig } from '../node_modules/@types/react-router-config/index'
import User from './components/user/index'

const routes: RouteConfig[] = [
            {
                path:'/',
                component: Home,
                exact: true,
                isAuth: false
            },
            {
                path:'/products',
                component: Products,
                isAuth: false,
                routes: [
                    {
                        path: '/products/new',
                        component: New,
                        isAuth: false
                    }
                ]
            },
            {
                path:'/login',
                component: Login,
                isAuth: false
            },
            {
                path:'/user',
                component: User,
                isAuth: true
            }

]

export default routes