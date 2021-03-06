import Ember from 'ember';
import ApplicationInitializer from 'chata/initializers/application';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | application', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ApplicationInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
