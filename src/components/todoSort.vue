<template>
    <div>
        <i class="iconfont icon-list1" @click="showSort"></i>
        <!-- 过滤下拉菜单 -->
        <section class="sort_wrap" v-show="isShow">
            <ul class="sort_list">
                <li class="sort_opt">Newest</li>
                <li class="sort_opt">Oldest</li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
const isShow: Ref<Boolean> = ref(false)

function showSort() {
    isShow.value = !isShow.value
}
</script>

<style lang="scss" scoped>
.icon-list1 {
    font-size: $menu-icon-font-size;
    color: $menu-icon-color;
    cursor: pointer;
}

.sort_wrap {
    position0: absolute;
    background-color: $menu-color;
    color: $menu-font-color;
    padding: $menu-padding;
    border-radius: $menu-border-radius;
}
</style>