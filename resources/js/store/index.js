import { indexOf } from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store( {
    state: {
        todos: [
            {body: 'Go to the store', done: true},
            {body: 'Go to the house', done: false},
            {body: 'Go to the gym', done: false}
        ]
    },
    mutations: {
        addTodo ({todos}, body) {
            todos.push({
                body,
                done: false
            })
        },
        completeAll ({todos}) {
            todos.forEach(todo => todo.done = true);
        },
        deleteTodo ({todos}, todo) {
            todos.splice(todos.indexOf(todo), 1);
        },
        toggleTodo (state, todo) {
            todo.done = ! todo.done
        }
    }
})