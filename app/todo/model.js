import DS from 'ember-data';

/*
"userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    */
export default DS.Model.extend({
  userId: DS.attr("number"),
  // id: DS.attr("number"),
  title: DS.attr("string"),
  completed: DS.attr("boolean")
})
