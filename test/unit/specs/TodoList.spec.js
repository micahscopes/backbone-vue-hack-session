import { mount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';
import Vue from 'vue';
import snapshots from './__snapshots__/TodoList.spec.js.snap';

describe('TodoListView render method', () => {
  it('should render an empty list when empty', () => {
    const todos = [];
    const wrapper = mount(TodoList, { propsData: { todos } });
    const vue_html = wrapper.html();
    expect(vue_html).sameHtmlAsSnapshot();
  });
  it('should render a list when not empty', () => {
    const todos = [
      {
        completed: true,
        description: 'A completed task',
      },
      {
        completed: false,
        description: 'An incompete task',
      },
    ];
    const wrapper = mount(TodoList, { propsData: { todos } });
    const vue_html = wrapper.html();
    expect(vue_html).sameHtmlAsSnapshot();
  });
});