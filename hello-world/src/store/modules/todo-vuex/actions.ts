import { ActionTree } from 'vuex';
import { TodoState, TodoItem } from './state';
import { RootState } from '@/store/state';
// import { Modal } from 'ant-design-vue';

export const actionTypesWithModuleName = {
  LOAD_TODO_ITEMS: 'todoModule/loadTodoItems',
  ADD_TODO: 'todoModule/add',
  REMOVE_TODO: 'todoModule/remove',
  UPDATE_TODO: 'todoModule/update',
};

export const actionTypes = {
  LOAD_TODO_ITEMS: 'loadTodoItems',
  ADD_TODO: 'add',
  REMOVE_TODO: 'remove',
  UPDATE_TODO: 'update',
};

interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

export const actions: ActionTree<TodoState, RootState> = {
  // @TODO: fetch data from api
  async loadTodoItems({ commit }): Promise<void> {
    const todoItems = [
      { id: 1, name: 'AAAA' },
      { id: 2, name: 'BBB' },
      { id: 3, name: 'CCCC' },
      { id: 4, name: 'DDDD' },
    ];
    commit('setTodoItems', todoItems);

    // const fetchEmployees = async (): Promise<Array<Employee>> => {
    //   let result: Employee[] = [];
    //   const api = 'http://dummy.restapiexample.com/api/v1/employees';
    //   try {
    //     const response = await fetch(api);
    //     const { data } = await response.json();
    //     result = data;
    //   } catch (error) {
    //     Modal.error({
    //       title: 'Error',
    //       content: 'Something wrong, can not call api',
    //     });
    //   }

    //   return result;
    // };

    // const x = await fetchEmployees();
    // console.log(x);
  },
  add({ commit }, name: string): void {
    // @TODO: make the api request before commnitting to the store
    commit('add', name);
  },
  update({ commit }, todoItem: TodoItem): void {
    // @TODO: make the api request before commnitting to the store
    commit('update', todoItem);
  },
  remove({ commit }, todoItemId: number): void {
    // @TODO: make the api request before commnitting to the store
    commit('remove', todoItemId);
  },
};
