import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Freebies = new Mongo.Collection('freebies');

Meteor.methods({
  'freebies.insert'({desc, sponsor, latLng}) {
    new SimpleSchema({
      desc: {type: String},
      sponsor: {type: String},
      latLng: {type: Object, blackbox: true}
    })

    Freebies.insert({
      desc,
      sponsor,
      latLng,
      created_at: new Date()
    })
  }
})
