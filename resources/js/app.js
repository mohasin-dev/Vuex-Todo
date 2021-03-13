/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import store from './store'

Vue.component('todo-component', require('./components/TodoComponent.vue').default);

import { mapState, mapMutations } from 'vuex';
import { method } from 'lodash';

const app = new Vue({
    el: '#app',
    store,
    computed: {
        allCompleted () {
            return this.todos.every(todo => todo.done);
        },
        ...mapState(['todos']),
    },

    methods: {
        ...mapMutations(['completeAll']),

        addTodo (e) {
            let body = e.target.value;
            this.$store.commit('addTodo', body);
            e.target.value = '';
        }
    } 
});
