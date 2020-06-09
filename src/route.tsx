import Home from './components/home/index'
import Login from './components/login/index'
import New from './components/new/index'
import Products from './components/products/index'
import { RouteConfig } from '../node_modules/@types/react-router-config/index'
import User from './components/user/index'
import Detail from 'components/productsDetail'
import SignUp from 'components/auth/signUp'
import LogIn from 'components/auth/logIn'

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
                    },
                    {
                        path:'/products/:id',
                        component: Detail,
                        isAuth: false
                    }
                ]
            },
            {
                path:'/logIn',
                component: LogIn,
                isAuth: false
            },
            {
                path:'/signUp',
                component: SignUp,
                isAuth: false
            },
            {
                path:'/user',
                component: User,
                isAuth: true
            }

]

export default routes