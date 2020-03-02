<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'Card',
    components: {

    },
}
</script>

<style lang="scss">
    $component: 'card';

    .#{$component} {
        position: relative;
        background: $white;
        padding: space(1);
        width: 100%;
        height: 100%;
    }

</style>
