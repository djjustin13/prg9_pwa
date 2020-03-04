import API from "@/api/index";
import endpoints from "@/api/endpoints";
import localforage from 'localforage'
import { extendPrototype } from 'localforage-getitems';
import { extendPrototype as extendPrototypeSet} from 'localforage-setitems' ;
extendPrototype(localforage);
extendPrototypeSet(localforage);

const storageInstance = localforage.createInstance({
    name: 'projects'
})

const fetchProjects = ( { dispatch } ) => {
    API.get(endpoints.PROJECTS)
    .then((data) => {
        let obj = {}
        data.projects.forEach(project => {
            obj[project._id] = project
        });
        storageInstance.setItems(obj)
        dispatch('loadProjects')
    })
    .catch((error) => {
        dispatch('loadProjects')
    })
}

const loadProjects = ( { commit } ) => {
    storageInstance.keys()
    .then((keys) => {
        if (keys.length > 0) {
            storageInstance.getItems(keys).then((results => {
                commit('SET_PROJECTS', results)
            }))
        } else {
            // Show offline page
            // @Todo: Build offline page
        }
        
    })
    .catch((error) => console.error())
}

export default {
    fetchProjects,
    loadProjects
}