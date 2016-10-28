import { Mongo } from 'meteor/mongo';

export const Freebies = new Mongo.Collection('freebies');

Freebies.schema = new SimpleSchema({
  name: {type: String},
  desc: {type: String},
  sponsor: {type: String},
  latLng: {type: Object}
});

Freebies.attachSchema(Freebies.schema);