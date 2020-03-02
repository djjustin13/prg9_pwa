import API from "@/api/index";
import endpoints from "@/api/endpoints";

const fetchProjects = ( { commit } ) => {
    API.get(endpoints.PROJECTS)
    .then((data) => {
        commit('SET_PROJECTS', data.projects)
    })
    .catch((error) => {
        console.log(error)
    })
}

export default {
    fetchProjects
}