<template>
    <div class="project-detail">
        <template v-if="currentProject">
            <div class="project-detail__header">
                <img :src="imageSrc" alt="" @error="loadDefaultImage">
            </div>
        </template>
        <template v-else>
            <h1>Loading...</h1>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ProjectDetail',
    props: {
        id : {
            type: String,
            default: ''
        }
    },
    components: {

    },
    data: () => ({
            placeholder: '/img/nointernet.jpg',
            maxTries: 2,
            currentTry: 1,
            imageLoaded: true,
    }),
    created () {
        this.setCurrentProject(this.id)
    },
    methods: {
         ...mapActions({
            setCurrentProject: 'project/setCurrentProject'
        }),
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
            currentProject: 'project/current_project',
            network: 'device/network'
        }),
        imageSrc() {
            if (this.network === 'online' || this.imageLoaded) {
                this.imageLoaded = true
                return 'https://cmgt.hr.nl:8000/' + this.currentProject.headerImage
            }
            return this.placeholder
        }
    },
}
</script>

<style lang="scss">
    $component: 'project-detail';

    .#{$component} {
        &__header {
            display: flex;
            flex: 0 0 auto;
            -ms-flex: 0 0 19rem;
            width: 100%;
            height: space(15);
            max-height: 25vh;
            align-self: flex-start;
            text-align: center;

            img {
                display: block;
                width: 100%;
                margin: 0 auto;
                object-fit: cover;
            }
        }

        @include respond-to(small) {
            &__header {
                height: space(25);
                max-height: 50vh;
            }
        }
    }
    
</style>
