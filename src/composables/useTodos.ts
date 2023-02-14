import axios from '../service'
import { AxiosResponse } from 'axios'
import { onMounted, Ref, ref } from 'vue'
import { todo } from '../../types'

export function useTodos() {
    const todos: Ref<Array<todo>> = ref([])

    async function fetchTodos() {
        await axios.request({
            url: '/todon/todoList',
            // url: 'https://jsonplaceholder.typicode.com/todos',
            method: 'GET'
        }).then((res: AxiosResponse) => {
            todos.value = res.data
        }).catch(err => {
            console.log("请求失败", err)
        })
    }


    function addTodo(todo:todo) {
        todos.value.push(todo)
    }

    onMounted(() => fetchTodos())

    return {
        todos,
        addTodo
    }

}