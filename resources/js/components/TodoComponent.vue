<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <li :class="{'is-complete': todo.done}">
                            <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
                            <label v-text="todo.body"></label>
                            <button @click="deleteTodo(todo)">x</button>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .is-complete {
        color: green;
    }
</style>

<script>
    import {mapMutations} from 'Vuex';

    export default {
        props: ['todo'],
        methods: mapMutations(['deleteTodo', 'toggleTodo'])
    }
</script>
