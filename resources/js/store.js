import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)
const persistedData = new createPersistedState({
    key: 'spa_training',
    storage: localStorage,
    reducer: state => ({
        isLoggedin: state.isLoggedin,
        loggedInUser: state.loggedInUser
    })
})

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        isLoggedin: false,
        loggedInUser: null,
        allUsers: [],
        userInfo: [],
        request: [],
        rules:
        {
            required: [(input) => !!input || "Field is required"],
        },


    },

    actions: {
        loginUser(context, payload) {
            context.commit('loginUser', payload)
        },

        //=========================
        getUsers(context) {
            axios.get('/api/users')
                .then((response) => {
                    // this.users = response.data
                    context.commit('getUsers', response.data)
                })
        },


        login(context) {
            let user_data = {
                id: 1,
                name: 'karl'
            }

            axios.post('/api/getUser', user_data)
                .then(response => {
                    context.commit('login', response.data);
                })
        },

        logout(context) {
            context.commit('logout');
        },
    },

    mutations: {
        setUserLevel(state, level) {
            state.userInfo.value[0].UserLevel = level;
        },
        loginUser(state, payload) {
            state.userInfo = payload
        },



        //===========================
        login(state, data) {
            state.loggedInUser = data
            state.isLoggedin = true
        },

        logout(state) {
            state.loggedInUser = {}
            state.isLoggedin = false;
        },


        getUsers(state, data) {
            state.allUsers = data
        },

        delete_request(state, payload) {
            state.request = payload
            return state.request
        },
        delete_level(state, payload) {
            state.UserLevel = payload
            return state.request
        },
        logoutUser(state, payload) {
            state.userInfo = [];
            return state.userInfo
        },
    },
    getters: {},
    // plugins: [persistedData]
});