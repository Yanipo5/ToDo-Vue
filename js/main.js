const data = {
  todos: [
    new Todo("learn vue"),
    new Todo("code in vue"),
    new Todo("do someting amazing"),
    new Todo("do real big app")
  ],
  filter: "",
  newTodo: ""
};

// create a root instance
const app = new Vue({
  el: "#app",
  data: data,
  methods: {
    addTodo: () => {
      data.todos = data.todos.concat(new Todo(data.newTodo));
      data.newTodo = "";
    },
    deleteTodo: index => {
      data.todos = data.todos
        .slice(0, index)
        .concat(data.todos.slice(index + 1));
    },
    setFocus: index => {
      setTimeout(() => {
        document.querySelector("#pointHere").focus();
      }, 150);
    }
  }
});
