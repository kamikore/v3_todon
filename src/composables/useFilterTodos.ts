import { computed, ref, Ref } from "vue";
import { todo } from '../../types'

/**
 * 对todos列表过滤，包括排序，过滤，标签等操作, 过滤与排序并不互斥，而是作用于同一份数据
 * @param {Array<todo>} todos 待办事项列表
 * @returns filter 过滤类型， filterTodos 计算属性返回过滤后todos
 */
export function useFilterTodos(todos:Array<todo>) {
    const filterBy:Ref<string> = ref("all");  // 过滤类型
    const sortBy = ref("newest");   // 排序类型

    const filterTodos = computed(() => {
        return sort.value;      // sort 返回的是只读的响应式 ref 对象
    });


    // 过滤
    const filter = computed(() => {
        console.log("filter trigger",filterBy);
        // 当数据为空或是只有一项时，无需触发更新
        if(todos && todos.length <= 1) return todos;

        switch (filterBy.value) {
            case "done":
                return todos.filter((todo: todo) => todo.isDone);
            case "todo":
                return todos.filter((todo: todo) => !todo.isDone);
            default:
                return todos;
        }
    });

    // 排序
    const sort = computed(() => {
        console.log("sort trigger",sortBy);

        // filter 返回的是只读的响应式 ref 对象
        if (filter && filter.value.length <= 1) return filter.value;
        // 需要深拷贝，而不能简单赋值
        let temp = [...filter.value];
        switch (sortBy.value) {
            case 'newest':
                /*
                    如果下述排序条件，无论是比较小于或大于，整个数组都不会变
                    return temp.sort((pre, next) => new Date(pre.dateTime) >(<) new Date(next.dateTime) ? 0 : 1);
                    
                    tip：sort 没那么简单!!!，注意了解清楚排序规则
                */
                return temp.sort((pre, next) => new Date(next.dateTime) - new Date(pre.dateTime) );
            case 'oldest':
                return temp.sort((pre, next) => new Date(pre.dateTime) - new Date(next.dateTime) );
            default:
                return temp;
        }
    })

    return { filterBy, sortBy, filterTodos };
}