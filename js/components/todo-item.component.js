Vue.component("todo-item", {
  props: ["todo", "index"],
  data: function() {
    return {
      editMode: false,
      title: "click here to edit"
    };
  },
  computed: {
    /**
     * @returns strike thourogh completed todos.
     */
    strikeThrough: function() {
      if (this.todo.status === "completed") {
        return { "text-decoration": "line-through" };
      } else {
        return {};
      }
    },
    /**
     * @returns truefy completed status
     */
    isEditMode: function() {
      return this.editMode === true;
    }
  },
  template: `<li class="relative">
                    <img src="resources/v-icon.png" v-if="todo.isCompleted()" />
                    <span @click="editMode=true; app.setFocus(index);" :style="strikeThrough" v-if="!isEditMode" :title="title">{{todo.txt}} - {{todo.status}}</span>
                    <span v-else>
                        <input @mouseleave="editMode=false" id="pointHere" v-model="todo.txt" />
                    </span>
    
                    <span class="absolute todo-pills">
                        <a v-if="!todo.isCompleted()" class="badge badge-pill badge-primary" href="#" @click="todo.setCompletedStatus()"> complete </a>
                        <a v-else class="badge badge-pill badge-secondary" href="#" @click="todo.setUncompletedStatus()"> uncomplete </a>
                        <a class="badge badge-pill badge-danger" href="#" @click="app.deleteTodo(index)"> remove </a>
                    </span>
                </li>`
});
