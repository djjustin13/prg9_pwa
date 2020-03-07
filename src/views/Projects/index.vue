<template>
    <div class="projects">
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

export default {
    name: 'Projects',
    components: {
        Project,
        Card
    },
    mounted () {
        this.fetchProjects()
    },
    computed: {
        ...mapGetters({
            projects: 'project/projects',
            network: 'device/network'
        })
    },
    methods: {
        ...mapActions({
            fetchProjects: 'project/fetchProjects'
        })
    },
}
</script>
