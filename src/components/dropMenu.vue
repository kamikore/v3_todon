<template>
    <div style="position: relative;" ref="el">
        <i class="icon iconfont" :class="icon" @click="showMenu"></i>
        <!-- 下拉菜单 -->
        <Transition>
            <section class="menu_wrap" :class="align" v-show="isShow">
                <ul class="menu_list">
                    <!-- 事件触发并传值 -->
                    <li 
                        class="menu_opt" 
                        :class="[opts.length - 1 === index ? 'lastOne' : '',isChosen === index? 'isChosen':'']"
                        v-for="(item, index) in opts" 
                        :key="index" 
                        @click="()=>{$emit(item.handler, item.params); isChosen = index; isShow = false;}"
                    >
                        {{ item.title }}
                    </li>
                </ul>
            </section>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref, defineProps, onMounted, onUnmounted } from 'vue'

const isShow: Ref<Boolean> = ref(false)
// 当前选中的选项索引
const isChosen: Ref<Number> = ref(0)


const props = defineProps({
    icon: { type: String, required: false },   // 点击图标
    opts: { type: Array, required: true },    // 菜单选项，title 选项标签，handler 处理函数
    align: { type: String, required: false, default: 'left' }  // 对齐方式, left对齐左边框，center对齐中线，right对齐右边框
})



// 组件实例
const el = ref<HTMLElement | null>(null)

function showMenu() {
    isShow.value = !isShow.value
}


const clickOutside:EventListener = (e: Event) => {
    if (!el.value?.contains(e.target)) isShow.value = false
}

onMounted(() => {
    console.log("组件实例", el.value)
    document.addEventListener('click',clickOutside)
})

onUnmounted(() => {
    // 清除事件监听
    document.removeEventListener('click',clickOutside)
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
    z-index: 999;

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

        .menu_opt.isChosen::after {
            content: '';
            display: block;
            height: 2px;
            width: 100%;
            border-radius: 4px;
            background-color: #fff;
        } 


    }
}
</style>