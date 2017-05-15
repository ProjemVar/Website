import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
var ProfileCol = new Mongo.Collection('Profile')

Meteor.dbProfile = {
  listAllProfiles: function () {
    return ProfileCol.find()
  },
  getProfile: function () {
    var userId = Meteor.userId()
    if (userId == null) {
      console.log('getProfile NULL')
      return null
    }
    return ProfileCol.findOne({UserId: userId})
  },
  createProfile: function (name = '', surname = '') {
    var userId = Meteor.userId()
    if (userId == null) {
      console.log('createProfile NULL')
      return
    }
    ProfileCol.insert({UserId: userId, Name: name, Surname: surname})
  },
  setProfile: function (name, surname) {
    var user = Meteor.dbProfile.getProfile()
    if (user == null) {
      console.log('setProfile Null')
      this.createProfile(name, surname)
      return
    }
    ProfileCol.update({_id: user._id}, {$set: {Name: name, Surname: surname}})
  }
}
