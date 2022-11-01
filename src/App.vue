
<template>
  <main>
    <div class="todo_wrap">
      <h1>(icon)ToDon</h1>
      <todo-list></todo-list>
      <button class="addBtn">+</button>
    </div>
  </main>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import todoList from "@/components/todoList.vue"
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
