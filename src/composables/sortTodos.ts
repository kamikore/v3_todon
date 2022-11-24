import { Ref } from 'vue'
import { todo } from '../../types'

/**
 * 对todos列表排序
 * @param {Ref<Array<todo>>} todos 待办事项列表
 * @param {String} sortType 排序方式，'newest', 'oldest'
 */
<<<<<<< HEAD
export function sortTodos(todos: Ref<Array<todo>>, sortType: String): void {
    if (todos.value.length <= 1) return
    switch (sortType) {
        case 'newest':
            todos.value.sort((pre, next) => {
                return pre > next ? 0 : 1
            })
            break;
        case 'oldest':
            todos.value.sort((pre, next) => {
                return pre < next ? 0 : 1
            })
            break;
    }
=======
export function sortTodos(todos, sortType) {
    console.log("排序")
>>>>>>> 82d3d81e6826242ead55f74b239019931fd8fa47
}