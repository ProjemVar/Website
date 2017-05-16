import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import '../html/index.html'
import '../../api/db-profile.js'

Template.index.helpers({
  allProfiles () {
    return Meteor.users.find({})
  },
  userEmail: function () {
    return this.emails[0].address
  }
})
