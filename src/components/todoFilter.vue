<template>
    <div>
        <i class="iconfont icon-filter" @click="showFilter"></i>
        <!-- 过滤下拉菜单 -->
        <section class="filter_wrap" v-show="isShow">
            <ul class="filter_list">
                <li class="filter_opt">All</li>
                <li class="filter_opt">Todo</li>
                <li class="filter_opt">Done</li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
const isShow: Ref<Boolean> = ref(false)

function showFilter() {
    isShow.value = !isShow.value
}
</script>

<style lang="scss" scoped>
.icon-filter {
    font-size: $menu-icon-font-size;
    color: $menu-icon-color;
    cursor: pointer;
}

.filter_wrap {
    position: absolute;
    background-color: $menu-color;
    color: $menu-font-color;
    padding: $menu-padding;
    border-radius: $menu-border-radius;
}
</style>