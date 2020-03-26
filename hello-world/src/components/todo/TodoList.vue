<template>
  <fragment>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <TodoItem
          v-bind:item="item"
          v-on:update="onUpdate"
          v-on:remove="onRemove"
          v-on:increaseCounterEvt="doSomething"
        />
      </li>
    </ul>
    <textarea rows="5" v-model="countersText" />
    <div>Test</div>
    <div>Hello</div>
  </fragment>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TodoItem from './TodoItem.vue';
import { TodoItemModel } from '@/components/todo/models/todo-item-model';

export interface Counter {
  Id: number;
  Value: number;
}

@Component({
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  @Prop() private items!: TodoItemModel[];
  private counters: Counter[] = [];

  constructor() {
    super();
  }

  private get countersText() {
    return JSON.stringify(this.counters);
  }

  private onUpdate(item: TodoItemModel): void {
    this.$emit('update', item);
  }

  private onRemove(id: number): void {
    this.$emit('remove', id);
  }

  private doSomething(id: number): void {
    let counterById = this.counters.find(x => x.Id === id);

    if (counterById) {
      counterById.Value = counterById.Value + 1;
    } else {
      counterById = {
        Id: id,
        Value: 1,
      };

      this.counters = [...this.counters, counterById];
    }
  }
}
</script>
