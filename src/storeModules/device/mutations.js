import Vue from 'vue';

export const mutations = {
    SET_MOBILE (state, payload) {
        Vue.set(state, 'mobile', payload);
    },
    SET_NETWORK (state, payload) {
        Vue.set(state, 'network', payload);
    }
};

export default mutations;
