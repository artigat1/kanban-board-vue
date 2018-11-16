import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
    state: {
        items: {
            todo: [],
            inProgress: [],
            done: [],
        },
        nextId: 1,
    },
    mutations: {
        addItem(state, item) {
            state.items.todo.push({
                ...item,
                id: state.nextId,
            });
            state.nextId += 1;
        },
        updateItems(state, { items, id }) {
            state.items[id] = items;
        },
    },
});
