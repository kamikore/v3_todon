<template>
  <main>
    <header>
      <div class="header_item">
        <a class="github_link" href="https://github.com/kamikore/v3_todon" target="_blank"></a>
      </div>
    </header>
    <div class="todo_wrap">
      <h1>ToDon</h1>
      <div class="banner">
        <!-- 为过滤菜单，监听过滤事件, 修改filter的值，从而计算属性重新计算 -->
        <drop-menu :opts="filters" icon="icon-list1" align="left" @on-filter="filterBy = $event" />
        <!-- 为排序菜单，监听排序事件 -->
        <drop-menu :opts="sorts" icon="icon-filter" align="right" @on-sort="sortBy = $event" />
      </div>
      <todo-add></todo-add>
      <todo-list :todos="filterTodos"></todo-list>
      
    </div>
  </main>
</template>


<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { getCurrentInstance, onMounted, Ref, ref } from 'vue'
import todoList from "@/components/todoList.vue"
import todoAdd from "@/components/todoAdd.vue"
import todoSort from '@/components/todoSort.vue'
import todoFilter from '@/components/todoFilter.vue'
import dropMenu from '@/components/dropMenu.vue'
import { useTodos, useFilterTodos } from '@/composables'
import { todo } from '../types'


// 需要保留原数据
const todos: Array<todo> = useTodos()

const { filterBy, sortBy, filterTodos } = useFilterTodos(todos);
const filters = [
  {
    title: 'All',       // 菜单标签文本
    handler: 'on-filter',  // 触发事件处理函数
    params: 'all',        // 事件传值
  },
  {
    title: 'Done',
    handler: 'on-filter',
    params: 'done',
  },
  {
    title: 'Todo',
    handler: 'on-filter',
    params: 'todo',
  }
]
const sorts = [
  {
    title: 'Newest',
    handler: 'on-sort',
    params: 'newest',
  },
  {
    title: 'Oldest',
    handler: 'on-sort',
    params: 'oldest',
  }
]


</script>



<style lang="scss" scoped>

header {
  width: 100%;
  position: fixed;
  top: 0;
  padding: 20px;

  .header_item {
      width: 60px;
      height: 40px;
      background-color: #fff;
      border-radius: 12px;
      float: right;

      .github_link:before {
        background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E") no-repeat;
        content: "";
        display: block;
        height: 30px;
        width: 30px;
        margin: 5px auto;
      }
  }
}


main {
  display: grid;
  width: 100%;
  min-height: 100vh;
  align-items: start; // 垂直置顶
  justify-items: center; // 水平居中, 注意如果设置了justify-content 宽度会缩减
  padding: 10vh 0;

  .todo_wrap {
    position: relative;
    width: 60%;
    max-width: 400px;
    min-width: 250px;
    background-color: $cardBox-color;
    padding: 40px 10px;
    border-radius: $cardBox-border-radius;
    text-align: center;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);

    .banner {
      display: flex;
      justify-content: space-between;
      padding: $cardBox-padding;
    }

    h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 20px;
      /* identical to box height */
    }

  }
}
</style>
