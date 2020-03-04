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

export default {
    name: 'App',
    components: {
        JstHeader
    },
    mounted() {
        console.log(navigator.onLine ? "online" : "offline")
        window.addEventListener('online',  ()=>{
            console.log('online')
        });
         window.addEventListener('offline',  ()=>{
            console.log('offline')
        });
    }
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
