import Rest from './../components/Rest'
import Main from './../components/Main'

export const routes = [{
        path: '/info',
        name: 'main',
        component: Main,
    },
    { path: '/', component: Rest, name: 'rest' },
    { path: '*', redirect: '/' }
]