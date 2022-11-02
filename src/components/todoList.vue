<template>
    <div class="list_wrap">
        <listItem v-for="item in todos" :key="item.id" :todo="item"></listItem>
    </div>
</template>

<script setup lang="ts">
import listItem from '@/components/todoListItem.vue'
const props = defineProps({
    todos: Array
})
</script>

<style lang="scss" scoped>
.list_wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 80%;
    margin: auto;
}
</style>