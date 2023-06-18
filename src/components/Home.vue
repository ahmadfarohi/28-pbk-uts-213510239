<template>
  <div class="container">
    <h1>Todo List</h1>
    <div class="add-todo">
      <input type="text" v-model="newTodo" placeholder="Add new todo+">
      <button @click="addTodo">Add</button>
    </div>
    <div class="filter-buttons">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">All</button>
      <button :class="{ active: filter === 'active' }" @click="filter = 'active'">Active</button>
      <button :class="{ active: filter === 'completed' }" @click="filter = 'completed'">Completed</button>
    </div>
    <ul>
      <li v-for="(todo, index) in filteredTodos" :key="index" :class="{ done: todo.completed }">
        <span :style="{ 'text-decoration': todo.completed ? 'line-through' : 'none' }">{{ todo.text }}</span>
        <div class="actions">
          <button @click="complete(index)">Done</button>
          <button @click="deleteItem(index)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: '',
      filter: 'all'
    };
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'completed':
          return this.todos.filter(todo => todo.completed);
        case 'active':
          return this.todos.filter(todo => !todo.completed);
        default:
          return this.todos;
      }
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo !== '') {
        this.todos.push({
          text: this.newTodo,
          completed: false
        });
        this.newTodo = '';
      }
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
    },
    complete(index) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  font-size: 16px;
  font-family: Arial, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

li .done {
  text-decoration: line-through;
}

.actions {
  display: flex;
}

.actions button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  color: #fff;
  font-size: 14px;
  font-family: Arial, sans-serif;
  cursor: pointer;
}

.actions button:hover {
  background-color: #333;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.filter-buttons button {
  margin-right: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  color: #fff;
  font-size: 14px;
  font-family: Arial, sans-serif;
  cursor: pointer;
}

.filter-buttons button.active {
  background-color: #333;
}

.add-todo {
display: flex;
align-items: center;
margin-bottom: 20px;
}

.add-todo input {
flex-grow: 1;
margin-right: 10px;
padding: 10px;
border: none;
border-radius: 5px;
font-size: 14px;
font-family: Arial, sans-serif;
}

.add-todo button {
padding: 10px;
border: none;
border-radius: 5px;
background-color: #ccc;
color: #fff;
font-size: 14px;
font-family: Arial, sans-serif;
cursor: pointer;
}

.add-todo button:hover {
background-color: #333;
}

</style>

 