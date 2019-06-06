import Route from '@ember/routing/route';

export default Route.extend({
    async model(params) {
        const user = await this.store.findRecord("user", params.id);
        // hasMany did not work, so this is workaround
        const posts = await this.store.query("post", {userId: user.id});
        user.set("posts", posts);
        console.log("posts length = ", posts.length);
        console.log(posts);
        // return {user: user, posts: posts};
        return user;
    } 
});
