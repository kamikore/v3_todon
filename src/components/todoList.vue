<template>
    <div class="list_wrap">
        <listItem v-for="(item, index) in arr" :key="index" :isDone="item.isDone"></listItem>
    </div>
</template>

<script setup lang="ts">
import listItem from '@/components/todoListItem.vue'
let arr = [{ isDone: true }, { isDone: false }, { isDone: false }, { isDone: false }]
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