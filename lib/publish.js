import { Meteor } from 'meteor/meteor'
import { Projects } from './collections/collections.js'
if (Meteor.isServer) {
  Meteor.publish('Projects', function () {
    //if (!this.userId) {
      //throw new Meteor.Error('not authorized')
    //} else {
      return Projects.find()
    //}
  })
  Meteor.publish('Users', function () {
    //if (!this.userId) {
      //throw new Meteor.Error('not authorized')
    //} else {
      return Meteor.users.find()
    //}
  })
}
