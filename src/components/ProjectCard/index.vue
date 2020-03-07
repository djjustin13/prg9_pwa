<template>
    <div class="project">
        <div class="project__media">
            <img :src="imageSrc" :v-bind="data.title" @error="loadDefaultImage">
        </div>
        <div class="project__content u-space-top-1">
            <h3 class="u-space-bottom-0">{{ data.title }}</h3>
            <p>{{ data.tagline }}</p>
            
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'Project',
        props: {
            data: {
                type: Object,
            }
        },
        data: () => ({
            placeholder: '/img/nointernet.jpg',
            maxTries: 2,
            currentTry: 1,
            imageLoaded: true,
        }),
        methods: {
            loadDefaultImage (event) {
                this.currentTry++;
                if (this.currentTry >= this.maxTries) {
                    this.imageLoaded = false
                    return;
                }
            }
        },
        computed: {
            ...mapGetters({
                network: 'device/network'
            }),
            imageSrc() {
                if (this.network === 'online' || this.imageLoaded) {
                    this.imageLoaded = true
                    return 'https://cmgt.hr.nl:8000/' + this.data.headerImage
                }
                return this.placeholder
            }
        },
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
