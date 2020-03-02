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
    }
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
