import Home from './components/home/index'
import New from './components/new/index'
import Products from './components/products/index'
// import { RouteConfig } from '../node_modules/@types/react-router-config/index'
import Detail from 'components/products/productDetail'
import SignUp from 'components/auth/signUp'
import LogIn from 'components/auth/logIn'
import Nomatch from './components/pages/nomatch'
import { Route, Switch, RouteProps } from 'react-router-dom'
import Loadable from 'react-loadable';
import React from 'react'

interface RouteConfig {
    component: RouteProps['component']
    path: RouteProps['path']
    exact?: RouteProps['exact']
    routes?: [{
         path:RouteProps['path'];
         component: RouteProps['component'];
    }]
  }

const routes: RouteConfig[] = [
            {
                path:'/',
                component: Loadable({
                    loader: () => import('../src/components/home/index'),
                    loading: () => <div>Loading...</div>
                }),
                exact: true
            },
            {
                path:'/products',
                component: Products,
            },
            {
                path:'/detail/:id',
                component: Detail,
            },
            {
                path: '/new',
                component: New,
            },
            {
                path: '/user/:id/ordered',
                component: Loadable({
                    loader: () => import('../src/components/user/index'),
                    loading: ()=> <div>Loading...</div>
                })
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
                path:'*',
                component: Nomatch
            }

]

export default routes