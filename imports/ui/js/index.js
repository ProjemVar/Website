import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import '../html/index.html'

Template.index.helpers({
  allProfiles () {
    return Meteor.users.find({})
  },
  userEmail: function () {
    return this.emails[0].address
  }
})
