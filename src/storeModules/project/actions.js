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

const setCurrentProject = ({ commit }, key) => {
    storageInstance.getItem(key)
    .then((result => {
        commit('SET_CURRENT_PROJECT', result)
    }))
    .catch((error) => {
        console.log(error)
    })
}

const callProjectsAPI = () => {
    return new Promise((resolve, reject) => {
        API.get(endpoints.PROJECTS)
        .then((data) => {
            resolve(data)
        })
        .catch((error) => {
            reject()
        })
        setTimeout(() => reject(), 3000);
    })
}

const fetchProjects = ( { dispatch } ) => {
    callProjectsAPI()
    .then((data) => {
        let obj = {}
        data.projects.forEach(project => {
            obj[project._id] = project
        });
        storageInstance.setItems(obj)
        commit('SET_PROJECTS', obj)
    })
    .catch(() => {
        dispatch('loadOfflineProjects')
    })
}

const fetchTags = ( { commit } ) => {
    API.get(endpoints.TAGS)
    .then((data) => {
        commit('SET_TAGS', data.tags)
    })
    .catch((error) => {
        console.log(error)
    })
}

const loadOfflineProjects = ( { commit } ) => {
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
    loadOfflineProjects,
    setCurrentProject,
    fetchTags
}