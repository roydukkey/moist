<template>
    <p :class="$style.myLib">
        <slot></slot>
    </p>
</template>

<script lang="ts" setup>

export interface Props {
    color?: 'red' | 'blue' | 'green';
}

const props = withDefaults(defineProps<Props>(), {
    color: 'red',
});

</script>

<style lang="scss" module>

.myLib {
    color: v-bind('props.color');
}

</style>
