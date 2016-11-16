import { Mongo } from 'meteor/mongo';

export const Freebies = new Mongo.Collection('freebies');

// if (Meteor.isServer) {
//   Meteor.publish('freebies', function freebiesPublication() {
//     return Freebies.find();
//   });
// }

Freebies.schema = new SimpleSchema({
  name: {type: String},
  desc: {type: String},
  sponsor: {type: String},
  latLng: {type: Object, blackbox: true},
  created_at: {type: Date}
});

Freebies.attachSchema(Freebies.schema);