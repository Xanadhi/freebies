import { Meteor } from 'meteor/meteor';
import '/imports/startup/server';

import '../imports/api/freebies/freebies.js';
import '../imports/api/freebies/server/publications.js';

Meteor.startup(() => {
  // code to run on server at startup
});
