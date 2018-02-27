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
    isStrikeThrough: function() {
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
                    <img v-if="todo.isCompleted()" src="resources/v-icon.png" />
                    <span v-if="!isEditMode" @click="editMode=true; app.setFocus(index);" :style="isStrikeThrough" :title="title">{{todo.txt}} - {{todo.status}}</span>
                    <input v-else @mouseleave="editMode=false" id="pointHere" v-model="todo.txt" />
    
                    <span class="absolute todo-pills">
                        <a v-if="!todo.isCompleted()" class="badge badge-pill badge-primary" href="#" @click="todo.setCompletedStatus()"> complete </a>
                        <a v-else class="badge badge-pill badge-secondary" href="#" @click="todo.setUncompletedStatus()"> uncomplete </a>
                        <a class="badge badge-pill badge-danger" href="#" @click="app.deleteTodo(index)"> remove </a>
                    </span>
                </li>`
});
