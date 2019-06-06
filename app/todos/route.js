import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const todos = await this.store.findAll("todo", {"_limit": 5});  // ?_limit=5 does not here , i dont know why
    console.log(todos);
    return todos;
  }
});
