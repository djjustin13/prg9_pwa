<template>
    <div class="tag_list" v-if="tags.length > 0 && active">
        <tag v-for="(tag, index) in tags" :key="index" :title="tag" :interactive="interactive" />
    </div>
    <p v-else>Tag filters kunnen alleen geladen worden met een netwerkverbinding...</p>
</template>

<script>
    import Tag from '@/components/Tag'

    export default {
        name: 'TagList',
        components: {
            Tag
        },
        props: {
            tags: {
                type: Array | Object,
                default: () => []
            },
            interactive: {
                type: Boolean,
                default: false
            },
            active: {
                type: Boolean,
                default: true
            },
        }
    }
</script>

<style lang="scss">
    $component: 'tag_list';

    .#{$component} {
        position: relative;
        display: block;
        padding: space(0.2) 0;
        width: 100%;
    }

</style>
