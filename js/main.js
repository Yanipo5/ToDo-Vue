const data = {
  todos: [],
  filter: "",
  newTodo: ""
};

{
  //init todos from localstorage
  const todoStore = JSON.parse(window.localStorage.getItem("todos"));
  todoStore.forEach(todo => {
    const { txt, status, editMode } = todo;
    var temp = new Todo();
    temp.txt = txt;
    temp.status = status;
    temp.editMode = editMode;
    data.todos.push(temp);
  });
}

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
  },
  watch: {
    todos: {
      //deep watching
      handler: function() {
        const temp = [];
        this.todos.forEach(todo => {
          const { txt, status, editMode } = todo;
          temp.push({
            txt,
            status,
            editMode
          });
        });

        window.localStorage.setItem("todos", JSON.stringify(temp));
      },
      deep: true
    }
  }
});
