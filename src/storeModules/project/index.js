import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const namespaced = true;

const state = {
	projects: {},
	current_project: {}
};

export default {
	namespaced,
	state,
	actions,
	getters,
	mutations
};
