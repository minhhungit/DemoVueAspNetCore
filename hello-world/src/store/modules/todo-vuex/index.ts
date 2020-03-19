import { Module } from 'vuex';
import { TodoState } from './state';
import { RootState } from '@/store/state';
import { actions } from './actions';
import { mutations } from './mutations';

export const todoModule: Module<TodoState, RootState> = {
    namespaced: true,
    actions,
    mutations,
    state: {
        todoItems: [],
    },
};
