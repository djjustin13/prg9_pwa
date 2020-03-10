<template>
    <div class="projects">
        <div class="projects__tags">
            <tag-list :tags="tags" :interactive="true" :active="network == 'online'"/>
        </div>
        <div class="grid">
            <div v-for="(project, index) in projects" :key="index" class="cell cell--1 cell--small-1/2 cell--medium-1/3 cell--large-1/4 u-space-bottom-1 u-space-small-half u-space-small-bottom-3">
                <router-link :to="`/project/${project._id}`">
                    <card>
                    <project :data="project" />
                </card>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Card from '@/components/Card'
import Project from '@/components/ProjectCard'
import TagList from '@/components/TagList'

export default {
    name: 'Projects',
    components: {
        Project,
        Card,
        TagList,
    },
    mounted () {
        this.fetchTags()
        this.fetchProjects()
    },
    computed: {
        ...mapGetters({
            projects: 'project/projects',
            network: 'device/network',
            tags: 'project/tags'
        })
    },
    methods: {
        ...mapActions({
            fetchProjects: 'project/fetchProjects',
            fetchTags: 'project/fetchTags'
        })
    },
}
</script>

<style lang="scss">
    $component: 'projects';

    .#{$component} {
        
        &__tags {
            margin-bottom: space(1);
        }
    }

</style>
