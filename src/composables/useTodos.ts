import axios from '../service'
import { onBeforeMount, reactive } from 'vue'
import { todo } from '../../types'
import { AxiosResponse } from 'axios'

export function useTodos() {
    const todos:Array<todo> = reactive([])

    async function fetchTodos() {
        await axios.request({
            url: '/todon/todoList',
            // url: 'https://jsonplaceholder.typicode.com/todos',
            method: 'GET'
        }).then((res:AxiosResponse) => {
            todos.push(...res.data)
        }).catch(err => {
            console.log("请求失败", err)
        })
    }


    function addTodo(todo:todo) {
        todos.push(todo)
    }

    onBeforeMount(() => fetchTodos())

    return {
        todos,
        addTodo
    }

}