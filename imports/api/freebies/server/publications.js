import { Meteor } from 'meteor/meteor';

import { Freebies } from '../freebies.js';

Meteor.publish('freebies', function freebiesPublication() {
  return Freebies.find();
});