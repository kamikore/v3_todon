import axios from '../service'
import { AxiosResponse } from 'axios'
import { onMounted } from 'vue'
import { todo } from '../../types'

export function useTodos(): Array<todo> {
    // const todos: Ref<Array<todo>> = ref([])
    let todos: Array<todo>

    async function fetchTodos() {
        await axios.request({
            url: '/todon/todoList',
            method: 'GET'
        }).then((res: AxiosResponse) => {
            todos = res.data
        }).catch(err => {
            console.log("请求失败", err)
        })
    }

    onMounted(() => fetchTodos())

    return todos

}