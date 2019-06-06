import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse (store, primaryModelClass, payload, id, requestType){
        console.log("id = ", id);
        const posts = this.store.findAll("post", {userId: id});
        console.log(posts.length);
        console.log(payload);
		payload = {
			users: payload
		};
		return this._super(store, primaryModelClass, payload, id, requestType);
    }
});