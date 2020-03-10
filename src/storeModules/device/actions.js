// import endpoints from "@/api/endpoints";
import store from '@/store';
// import router from "@/router";

const setNetworkStatus = ( { commit, getters } ) => {
    let status = navigator.onLine ? "online" : "offline"
    if (getters.network !== "online") {
        store.dispatch('project/fetchProjects')
        store.dispatch('project/fetchTags')
    }
    commit('SET_NETWORK', status)
    
}

export default {
    setNetworkStatus
}
