import DS from 'ember-data';

const {Model, belongsTo, attr}  = DS;

export default Model.extend({
    userId: belongsTo("user"),
    title: attr("string"),
    body: attr("string")
});
