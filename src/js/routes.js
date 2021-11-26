import Rest from './../components/Rest'
import Main from './../components/Main'
import FormControl from './../components/FormControl'

export const routes = [{
        path: '/info',
        name: 'main',
        component: Main,
    },
    {
        path: '/panel',
        name: 'cp',
        component: FormControl,
    },
    { path: '/', component: Rest, name: 'rest' },
    { path: '*', redirect: '/' }
]