<template>
  <div class="home">
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Home',
    components: {

    },
    mounted () {
        this.fetchProjects()
    },
    methods: {
        ...mapActions({
            fetchProjects: 'project/fetchProjects'
        })
    },
}
</script>
