import { createStore } from 'vuex'
const moduleB = {
  state: () => ({ data : "TODOS"}),
}
export default createStore({
  state : {
    todos: [{name : "kaka", isDone : true}]
  },
  getters : {
    countActive (state) {
        return state.todos.filter((each) => !each.isDone).length
    },
    active(state){
        return state.todos.filter((each) => !each.isDone)
    },
    completed(state){
        return state.todos.filter((each) => each.isDone)
    },
    progress(state){
    const isDoneData = state.todos.filter((each) => each.isDone);
      return isDoneData.length === 0
        ? 0
        : (isDoneData.length/state.todos.length) * 100;
    },
    progressStatus(state){
        const isDoneData = state.todos.filter((each) => each.isDone)
      if(isDoneData.length/state.todos.length === 1){
        return "success"
      }else{
        return "normal"
      }
    }
  },
  mutations: {
    addTodo (state, newTodo) {
      state.todos.push(newTodo)
    },
    deleteAllDone(state){
        state.todos = state.todos.filter((each) => !each.isDone)
    },
    changeTodos(state, data){
        state.todos = data
    },
    deleteTodo(state, data){
        state.todos = state.todos.filter((each) => {
            return each.name !== data
        })
    }
  },
  actions: {
    test ({commit}) {
        setTimeout(() => {
            commit('changeTodos', [{name : "test", isDone : false}])
    }, 2000)
    }
  },
  modules: {
    TITLE : moduleB
  }
})