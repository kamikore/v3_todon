<template>
    <div class="edit_bar_wrap">
        <input type="text" v-model="todoContent" @keyup.enter="emitAddTodo">
        <button @click="emitAddTodo">+</button>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const todoContent: Ref<String> = ref('')
const emit =  defineEmits(['add-todo'])

function emitAddTodo() {
  if(todoContent && todoContent.value == '') {
    alert("内容不能为空！")
    return
  }

  const todo = {
    id: uuidv4(),
    content: todoContent.value,
    dateTime: new Date().toLocaleString(),
    isDone: false,
  }

  emit('add-todo',todo)
}


</script>


<style lang="scss" scoped>
   .edit_bar_wrap {
      position: relative;
      display: flex;
      align-items: center;
    //   background-color: #f5f5f5;
    //   border-radius: 20px;
      

      input {
        width: 100%;
        outline: none;
        border: none;
        padding: 10px 40px;
        font-size: 18px;
        line-height: 32px;
        box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
        border-radius: 42px;
        color: #626262;
      }

      button {
        position: absolute;
        right: 2px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        align-items: flex-end;
        border: none;
        outline: none;
        font-size: 30px;
        line-height: 40px;
        vertical-align: middle;
        text-align: center;
        color: $btn-font-color;
        // background-color: $btn-color;
        background: $btn-background;
        margin: 2px;
        cursor: pointer;
      }
    }
</style>