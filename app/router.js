import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos');
  this.route('custom-header');
  this.route('custom-footer');
  this.route('users', function() {
    this.route('user', {path: "user/:id"});
  });
  this.route('comments');
});

export default Router;
