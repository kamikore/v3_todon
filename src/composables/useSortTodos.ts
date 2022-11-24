import { Ref, computed, ref } from 'vue'
import { todo } from '../../types'

/**
 * 对todos列表排序
 * @param {Ref<Array<todo>>} todos 待办事项列表
 * @returns {object}   sort 排序类型， sortTodos 计算属性返回排序后todos
 */

export function useSortTodos(todos: Ref<Array<todo>>): object {
    const sort = ref('newest');
    // 排序 todo
    const sortTodos = computed(() => {
        if (todos.value.length <= 1) return
        switch (sort.value) {
            case 'newest':
                return todos.value.sort((pre, next) => pre > next ? 0 : 1);
            case 'oldest':
                return todos.value.sort((pre, next) => pre < next ? 0 : 1);
            default:
                return todos.value;
        }
    })

    return { sort, sortTodos };
}