import Vue from 'vue';
import Vuex, {ActionTree, GetterTree, MutationTree} from 'vuex';
import {Model} from '@/feature/models/model';

Vue.use(Vuex);

export interface AppState {
    data: Model[];
}

const state: AppState = {
    data: []
};

const getters: GetterTree<AppState, AppState> = {
    getData: (state: AppState): Model[] | null => {
        return state.data;
    }
};

const mutations: MutationTree<AppState> = {
    saveFloors(state, data: Model[]) {
        state.data = data;
    }
};

const actions: ActionTree<AppState, AppState> = {
    saveFloors({commit, state}, data: Model[]) {
        commit('saveData', data);
    }
};

export const store = new Vuex.Store<AppState>({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
});


