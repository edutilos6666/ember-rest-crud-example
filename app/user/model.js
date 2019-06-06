import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr("string"),
    username: DS.attr("string"),
    email: DS.attr("string"),
    address: DS.attr(),
    phone: DS.attr("string"),
    website: DS.attr("string"),
    company: DS.attr(), 
    posts: DS.hasMany("post", {async: true})
});
