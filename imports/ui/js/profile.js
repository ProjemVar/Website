import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import '../../api/db-profile.js'
import '../html/profile.html'

Template.profile.helpers({
  getProfile () {
    return Meteor.dbProfile.getProfile()
  },
  getUserInfo () {
    var user = Meteor.user()
    return {username: user.username, email: user.emails[0].address}
  }
})
Template.profile.events({
  'click #update' (event, instance) {
    event.preventDefault()
    let name = event.target.name.value
    let surname = event.target.surname.value
    Meteor.dbProfile.setProfile(name, surname)
    alert('Update Done')
    // NO ERROR CONTROL FOR NOW
  }
})
