<template>
    <div style="position: relative;" ref="el">
        <i class="icon iconfont" :class="icon" @click="showMenu"></i>
        <!-- 下拉菜单 -->
        <Transition>
            <section class="menu_wrap" :class="align" v-show="isShow">
                <ul class="menu_list">
                    <li class="menu_opt" :class="opts.length - 1 === index ? 'lastOne' : ''"
                        v-for="(item, index) in opts" :key="index" @click="$emit(item.handler)">{{ item.title }}</li>
                </ul>
            </section>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref, defineProps, defineEmits, onMounted, onUnmounted } from 'vue'

const isShow: Ref<Boolean> = ref(false)
const emit = defineEmits(['filter', 'sort'])



const props = defineProps({
    icon: { type: String, required: false },   // 点击图标
    opts: { type: Array, required: true },    // 菜单选项，title 选项标签，handler 处理函数

    align: { type: String, required: false, default: 'left' }  // 对齐方式, left对齐左边框，center对齐中线，right对齐右边框
})

const emits = defineEmits(['sort', 'filter'])


// 组件实例？
const el = ref(null)

function showMenu() {
    isShow.value = !isShow.value
}

function clickHandler() {
    emit('filter', 666)
}

onMounted(() => {
    console.log("组件实例", el)
    // document.addEventListener('click', (e) => {
    //     if (!el.contains(e.target)) showMenu()
    // })
})

onUnmounted(() => {
    // 清除事件监听
})

</script>

<style lang="scss" scoped>
.icon {
    font-size: $menu-icon-font-size;
    color: $menu-icon-color;
    cursor: pointer;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.2s ease;
    transform-origin: top;
}

/* 进入 enter-to, enter-from 就会被移除 */
.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: scaleY(0);
}

.menu_wrap {
    position: absolute;
    background-color: $menu-color;
    color: $menu-font-color;
    padding: $menu-padding;
    border-radius: $menu-border-radius;

    &.left {
        left: 0;
    }

    &.center {
        left: 50%;
        transform: translateX(-50%);
    }

    &.right {
        right: 0;
    }

    .menu_list {

        .menu_opt {
            position: relative;
            font-size: $menu-font-size;
            font-weight: 700;
            line-height: 20px;
            text-align: start;
            margin-bottom: 4px;
            cursor: pointer;


            &:hover::after {
                content: '';
                display: block;
                height: 2px;
                width: 100%;
                border-radius: 4px;
                background-color: #fff;
            }
        }


        .menu_opt:hover {}
    }
}
</style>