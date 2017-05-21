import { Meteor } from 'meteor/meteor'
if (Meteor.isClient) {
  Meteor.subscribe('Projects')
  Meteor.subscribe('Users')
  Meteor.subscribe('Messages')
}
