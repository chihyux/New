import SignUp from 'components/auth/signUp'
import LogIn from 'components/auth/logIn'
import Nomatch from './components/pages/nomatch'
import { RouteProps } from 'react-router-dom'
import Loadable from 'react-loadable'
import React from 'react'
import Loading from 'components/pages/loading'

interface RouteConfig {
    component: RouteProps['component']
    path: RouteProps['path']
    exact?: RouteProps['exact']
    routes?: [{
        path: RouteProps['path'];
        component: RouteProps['component'];
    }]
}

const routes: RouteConfig[] = [
    {
        path: '/',
        component: Loadable({
            loader: () => import('../src/components/home/index'),
            loading: () => <Loading />
        }),
        exact: true
    },
    {
        path: '/products',
        component: Loadable({
            loader: () => import('../src/components/products/index'),
            loading: () => <Loading />
        })
    },
    {
        path: '/detail/:id',
        component: Loadable({
            loader: () => import('../src/components/products/productDetail'),
            loading: () => <Loading />
        })
    },
    {
        path: '/new',
        component: Loadable({
            loader: () => import('../src/components/new/index'),
            loading: () => <Loading />
        })
    },
    {
        path: '/user/:id/ordered',
        component: Loadable({
            loader: () => import('../src/components/user/index'),
            loading: () => <Loading />
        })
    },
    {
        path: '/logIn',
        component: LogIn,
    },
    {
        path: '/signUp',
        component: SignUp,
    },
    {
        path: '*',
        component: Nomatch
    }

]

export default routes