import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store.js'
Vue.use(VueRouter)

let router = new VueRouter({

    mode: 'history',
    base: '/hpm/',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import(/*webpackChunkName:"login"*/'../views/login'),
        },
        {
            path: '/HazardPatrolMonitoring',
            name: 'HazardPatrolMonitoring',
            component: () => import(/*webpackChunkName:"HazardPatrolMonitoring"*/'./components/HazardPatrolMonitoring'),
        },
        {
            path: '/SOHazardMonitoring',
            name: 'SOHazardMonitoring',
            component: () => import(/*webpackChunkName:"SOHazardMonitoring"*/'./components/SOHazardMonitoring'),
        },
        {
            path: '/users',
            name: 'users',
            component: () => import(/*webpackChunkName:"users"*/'./components/users'),
        },
        {
            path: '/employeeEmail',
            name: 'employeeEmail',
            component: () => import(/*webpackChunkName:"employeeEmail"*/'./components/employeeEmail'),
        },
        {
            path: '/hazardCategories',
            name: 'hazardCategories',
            component: () => import(/*webpackChunkName:"hazardCategories"*/'./components/hazardCategories'),
        },
        {
            path: '/hazardAreas',
            name: 'hazardAreas',
            component: () => import(/*webpackChunkName:"hazardAreas"*/'./components/hazardAreas'),
        },
        {
            path: '/safetyOfficers',
            name: 'safetyOfficers',
            component: () => import(/*webpackChunkName:"safetyOfficers"*/'./components/safetyOfficers'),
        },
        {
            path: '/departments',
            name: 'departments',
            component: () => import(/*webpackChunkName:"departments"*/'./components/departments'),
        },

    ],
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'login') {
        if (Object.keys(store.state.userInfo).length !== 0) {
            next();
        }
        else {
            if (store.state.userInfo.length > 0 && to.name == 'HazardPatrolMonitoring') {  // Check if ang user ay may laman at ung path ay naka 'testRequest'
                next('/HazardPatrolMonitoring')
            } else {
                next('/login');
            }
        }
    }
    else {
        if (Object.keys(store.state.userInfo).length !== 0) {
            next('/HazardPatrolMonitoring')
        } else {
            next();
        }
    }
})

export default router