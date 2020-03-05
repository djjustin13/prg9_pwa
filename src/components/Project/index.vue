<template>
    <div class="project">
        <div class="project__media">
            <img :src="`https://cmgt.hr.nl:8000/${data.headerImage}`" :v-bind="data.title">
        </div>
        <div class="project__content u-space-top-1">
            <h3 class="u-space-bottom-0">{{ data.title }}</h3>
            <p>{{ data.tagline }}</p>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        props: {
            data: {
                type: Object,
            }
        }
    }
</script>

<style lang="scss">
    $component: 'project';

    .#{$component} {
        display: flex;
        justify-content: space-between;
        flex-flow: column;
        height: 100%;

        &__media {
            display: flex;
            flex: 0 0 auto;
            -ms-flex: 0 0 19rem;
            width: 100%;
            height: space(15);
            align-self: flex-start;
            text-align: center;

            img {
                display: block;
                max-width: 100%;
                margin: 0 auto;
                object-fit: cover;
            }
        }

        &__content {
            display: flex;
            flex-flow: column wrap;
            justify-self: flex-end;
        }
    }

</style>
