import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Freebies = new Mongo.Collection('freebies');

Meteor.methods({
  'freebies.insert'({name, desc, sponsor, address, latLng}) {
    new SimpleSchema({
      name: {type: String},
      desc: {type: String},
      sponsor: {type: String},
      address: {type: String},
      latLng: {type: Object, blackbox: true}
    })

    Freebies.insert({
      name,
      desc,
      sponsor,
      address,
      latLng,
      created_at: new Date()
    })
  }
})
