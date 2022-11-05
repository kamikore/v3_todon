import axios from '../service'
import { AxiosResponse } from 'axios'
import { Ref, ref, onMounted } from 'vue'

export function useTodos() {
    const todos: Ref<Array<Object>> = ref([])

    async function fetchTodos() {
        await axios.request({
            url: '/todon/todoList',
            method: 'GET'
        }).then(res => {
            todos.value = res.data
        }).catch(err => {
            console.log("请求失败", err)
        })
    }

    onMounted(() => fetchTodos())

    return todos

}