import Vue from 'vue';

export const mutations = {
    SET_PROJECTS (state, payload) {
        Vue.set(state, 'projects', payload);
    }
};

export default mutations;
