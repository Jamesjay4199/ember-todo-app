import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todo', function() {
    this.route('new');
  });
  this.route('edit', {path: '/:todo_id/edit'});
});

export default Router;
