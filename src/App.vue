<template>
    <div id="app" class="container">
        <jst-header />
        <div class="app-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import JstHeader from "@/components/Header";
import { mapActions } from 'vuex';

export default {
    name: 'App',
    components: {
        JstHeader
    },
    mounted() {
        this.setNetworkStatus()
        window.addEventListener('online',  ()=>{
            this.setNetworkStatus()
        });
         window.addEventListener('offline',  ()=>{
            this.setNetworkStatus()
        });
    },
    methods: {
        ...mapActions({
            setNetworkStatus: 'device/setNetworkStatus'
        })
    },
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
