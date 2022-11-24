import { Ref } from 'vue'
import { todo } from '../../types'

/**
 * 对todos列表过滤
 * @param {Ref<Array<todo>>} todos 待办事项列表
 * @param {String} filterType 过滤方式,'all', 'done', 'todo'
 */
export function filterTodos(todos: Ref<Array<todo>>, filterType: String) {


    let res: Array<todo>
    switch (filterType) {
        case 'done':
            res = todos.value.filter(todo => {
                return todo.isDone === true
            })
            break;
        case 'todo':
            res = todos.value.filter(todo => {
                return todo.isDone === false
            })
            break;

        default:
            res = todos.value
            break;
    }

    todos.value = res

}