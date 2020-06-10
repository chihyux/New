import Home from './components/home/index'
import New from './components/new/index'
import Products from './components/products/index'
import { RouteConfig } from '../node_modules/@types/react-router-config/index'
import User from './components/user/index'
import Detail from 'components/productsDetail'
import SignUp from 'components/auth/signUp'
import LogIn from 'components/auth/logIn'
import Nomatch from './components/pages/nomatch'

const routes: RouteConfig[] = [
            {
                path:'/',
                component: Home,
                exact: true,
            },
            {
                path:'/products',
                component: Products,
                routes: [
                    {
                        path:'/products/:id',
                        component: Detail,
                    }
                ]
            },
            {
                path: '/new',
                component: New,
                routes: [
                    {
                        path:'/new/:id',
                        component: Detail,
                    }
                ]
            },
            {
                path:'/logIn',
                component: LogIn,
            },
            {
                path:'/signUp',
                component: SignUp,
            },
            {
                path:'/user',
                component: User,
            },
            {
                path:'*',
                component: Nomatch
            }

]

export default routes