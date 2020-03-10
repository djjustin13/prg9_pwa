import Vue from 'vue';

export default {
    SET_PROJECTS (state, payload) {
        Vue.set(state, 'projects', payload);
    },
    SET_CURRENT_PROJECT (state, payload) {
        Vue.set(state, 'current_project', payload);
    },
    SET_TAGS (state, payload) {
        Vue.set(state, 'tags', payload);
    },
};
