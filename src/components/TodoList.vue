<template>
<div class="todo-list">
    <section id="app" class="todo-container">
        <h2 class="todo-headline">Todos</h2>
        <div class="todo-init">

            <input id="todo-create" class="todo-input" type="text" placeholder="What needs to be done?" autofocus="">

            <span id="todo-toggle-all" class="todo-toggle todo-toggle-all glyphicon glyphicon-ok-sign" title="Toggle all todos"></span>

            <span id="todo-remove-all" class="todo-remove todo-remove-all glyphicon glyphicon-remove-circle" title="Remove all completed todos"></span>
        </div>

        <ul id="todo-list" class="todo-list">
            <li class="todo" v-for="todo in todos" :key="todo.id">
                <span class="todo-toggle  glyphicon glyphicon-ok" v-bind:class="todo.completed ? 'todo-toggle-complete' : ''"></span>
                <input class="todo-input todo-edit" type="text" :value=todo.description>
                <label class="todo-desc">{{todo.description}}</label>
                <span class="todo-remove glyphicon glyphicon-remove"></span>

            </li>
        </ul>
        <footer class="todo-footer">
            <table id="todo-stats" class="todo-stats">
                <tbody>
                    <tr>
                        <th>Total</th>
                        <th>Completed</th>
                        <th>Incomplete</th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </footer>
    </section>
</div>
</template>

<script>
export default {
    name: 'TodoList',
    props: ['todos'],

};
</script>

<style>
</style>