<template>
    <div class="item_wrap" :class="todo.isDone ? 'done' : ''">
        <!-- 将 <input> 直接放在 <label> 里，此时则不需要 for 和 id 属性，因为关联已隐含存在。所以点击label会触发input @click -->
        <!-- <label>
            <input type="checkbox" :checked="todoItem.completed" @click="$emit('change-state', $event)" />
            {{ todoItem.content }}
            <span class="check-button"></span>
        </label> -->
        <!-- label绑定input后，点label会触发两次label和input共同的父元素的click事件 -->
        <div class="content_wrap">
            <h3>{{ todo.content }}</h3>
            <span>{{ todo.dateTime }}</span>
        </div>
        <span class="checkBox"><i v-show="todo.isDone" class="iconfont icon-gougou"></i></span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    todo: Object,
})
</script>

<style lang="scss" scoped>
.item_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $item-color;
    padding: 10px;

    cursor: pointer;



    .content_wrap {
        display: flex;
        flex-direction: column;
        justify-content: start;
        text-align: start;


        h3 {
            font-size: $item-font-size;
            color: $item-font-color;
            margin-bottom: 4px;
        }

        span {
            font-size: calc($item-font-size - 10px);
            color: $item-font-color;
        }
    }

    .checkBox {
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: $checkBox-border-radius;
        background-color: $checkBox-color;
        color: $checkBox-font-color;
    }

    input {
        position: absolute; // 不影响 flex布局
        opacity: 0;
        // border-radius: $checkBox-border-radius;
    }
}



// ------------------------------- done 状态
.item_wrap.done {
    background-color: $item-color-done;

    .content_wrap {
        h3 {
            color: $color-primary !important;
            text-decoration: dashed line-through 1.2px;
        }

        span {
            color: $color-primary !important;
            text-decoration: dashed line-through 1px;
        }
    }

    .checkBox {
        background-color: $color-primary !important;
    }
}
</style>