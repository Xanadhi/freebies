import { Mongo } from 'meteor/mongo';

import { Freebies } from '../freebies.js';

Meteor.publish('freebies', function freebiesPublication() {
  return Freebies.find();
});