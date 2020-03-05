// import endpoints from "@/api/endpoints";
// import store from '@/store';
// import router from "@/router";

const setNetworkStatus = ( { commit } ) => {
    let status = navigator.onLine ? "online" : "offline"
    commit('SET_NETWORK', status)
}

export default {
    setNetworkStatus
}
