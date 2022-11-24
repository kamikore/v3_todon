<template>
  <main>
    <div class="todo_wrap">
      <h1>ToDon</h1>
      <div class="banner">
        <!-- 为过滤菜单，监听过滤事件, 修改filter的值，从而计算属性重新计算 -->
        <drop-menu :opts="filters" icon="icon-list1" align="left" @on-filter="filter = $event" />
        <!-- 为排序菜单，监听排序事件 -->
        <drop-menu :opts="sorts" icon="icon-filter" align="right" @on-sort="sort = $event" />
      </div>
      <todo-list :todos="todos"></todo-list>
      <button class="addBtn">+</button>
    </div>
  </main>
</template>


<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { getCurrentInstance, onMounted, Ref, ref } from 'vue';
import todoList from "@/components/todoList.vue"
import todoSort from '@/components/todoSort.vue'
import todoFilter from '@/components/todoFilter.vue'
import dropMenu from '@/components/dropMenu.vue'
import { useTodos, useSortTodos, usefilterTodos } from '@/composables';
import { todo } from '../types'


// 需要保留原数据
const todos: Array<todo> = useTodos()

const { sort, sortTodos } = useSortTodos(todos);
const { filter, filterTodos } = usefilterTodos(todos);
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

    .addBtn {
      position: absolute;
      bottom: 20px;
      right: 40px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 30px;
      line-height: 40px;
      vertical-align: middle;
      text-align: center;
      color: $btn-font-color;
      background-color: $btn-color;
      cursor: pointer;
    }

  }
}
</style>
