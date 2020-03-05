import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const namespaced = true;

const state = {
	mobile: false,
	network: "online"
};

export default {
	namespaced,
	state,
	actions,
	getters,
	mutations
};
