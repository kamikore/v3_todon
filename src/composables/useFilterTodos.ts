import { computed, ref, Ref } from "vue";
import { todo } from '../../types'

/**
 * 对todos列表过滤
 * @param {Ref<Array<todo>>} todos 待办事项列表
 * @returns {object} filter 过滤类型， filterTodos 计算属性返回过滤后todos
 */
export default function useFilterTodos(todos: Ref<Array<todo>>): object {
    const filter = ref("all");  // 过滤类型
    // 过滤 todo
    const filterTodos = computed(() => {
        switch (filter.value) {
            case "done":
                return todos.value.filter((todo: todo) => todo.isDone);
            case "todo":
                return todos.value.filter((todo: todo) => !todo.isDone);
            default:
                return todos.value;
        }
    });

    return { filter, filterTodos };
}