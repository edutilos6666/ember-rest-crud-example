import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const todos = await this.store.findAll("todo", {"?_limit": 5});
    console.log(todos);
    return todos;
  }
});
