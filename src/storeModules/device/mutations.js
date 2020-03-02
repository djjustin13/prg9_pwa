import Vue from 'vue';

export const mutations = {
    SET_MOBILE (state, payload) {
        Vue.set(state, 'mobile', payload);
    }
};

export default mutations;
