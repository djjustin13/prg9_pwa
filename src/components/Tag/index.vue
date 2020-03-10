<template>
    <div :class="`tag tag--${selected ? 'selected' : ''} tag--${interactive ? 'interactive' : ''  }`" @click.self="clickHandler">
        {{ title }}
    </div>
</template>

<script>

    export default {
        name: 'Tag',
        props: {
            title: {
                type: String,
                default: 'tag'
            },
            interactive: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            clickHandler(event) {
                if (this.interactive === true) {
                    this.selected = !this.selected
                }
            }
        }
    }
</script>

<style lang="scss">
    $component: 'tag';

    .#{$component} {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        color: $white;
        border: 2px solid $primary-color;
        background: $primary-color;
        border-radius: 5rem;
        padding: space(0.5) space(1);
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;

        & + & {
            margin-left: space(0.2);
        }

        &--interactive {
            cursor: pointer;
            &:hover {
                border: 2px solid lighten($primary-color, 10);
                background-color: lighten($primary-color, 10);
                color: $white;
            }
        }

        &--selected{
            background-color: $white;
            color: $primary-color;
            &:hover {
                background-color: $white;
                color: $primary-color;
                border: 2px solid $primary-color;
            }
        }
    }

</style>
