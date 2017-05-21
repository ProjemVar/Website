import { Meteor } from 'meteor/meteor'
import { Projects, Messages } from './collections/collections.js'
if (Meteor.isServer) {
  Meteor.publish('Projects', function () {
    /*
    if (!this.userId) {
      throw new Meteor.Error('not authorized')
    } else {
      return Projects.find()
    }
    */
    return Projects.find()
  })
  Meteor.publish('Users', function () {
    /*
    if (!this.userId) {
      throw new Meteor.Error('not authorized')
    } else {
      return Meteor.users.find()
    }
    */
    return Meteor.users.find()
  })
  Meteor.publish('Messages', function () {
    /*
    if (!this.userId) {
      throw new Meteor.Error('not authorized')
    } else {
      return Meteor.users.find()
    }
    */
    return Messages.find()
  })
}
