<template>
    <div class="list_wrap">
        <text class="tipText" v-show="todos && todos.length === 0">~~内容为空~~</text>
        <listItem v-for="(item, index) in todos" :key="item.id" :todo="item" @click="handleClick(index)"></listItem>
    </div>
</template>

<script setup lang="ts">
import listItem from '@/components/todoListItem.vue'
const props = defineProps({
    todos: {
        type: Array,
        default: []
    }
})

function handleClick(index: Number) {
    props.todos[index].isDone = !props.todos[index].isDone
    console.log(props)
}

</script>

<style lang="scss" scoped>
.list_wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: $cardBox-padding;
    margin-top: 20px;

    .tipText {
        color: #c0c0c0;
    }
}
</style>