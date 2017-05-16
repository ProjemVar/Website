import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import { Bert } from 'meteor/themeteorchef:bert'
import '../../api/db-profile.js'
import '../html/profile.html'

Template.profile.helpers({
  getUserInfo () {
    var user = Meteor.user()
    return {
      id: user._id,
      username: user.username,
      email: user.emails[0].address
    }
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

Template.editprofile.helpers({
  getId: function () {
    var id = FlowRouter.getParam('id')
    return id
  },
  profile: function () {
    var id = FlowRouter.getParam('id')
    return Meteor.users.findOne({_id: id})
  },
  userEmail: function () {
    var id = FlowRouter.getParam('id')
    return Meteor.users.findOne({_id: id}).emails[0].address
  }
})

Template.editprofile.events({
  'submit .profile-update-post': function (event) {
    event.preventDefault()
    let username = Meteor.myAuthFuncs.trimInput(event.target.username.value)
    let email = Meteor.myAuthFuncs.trimInput(event.target.email.value)
    let oldpassword = Meteor.myAuthFuncs.trimInput(event.target.oldpassword.value)
    let password = Meteor.myAuthFuncs.trimInput(event.target.password.value)
    let repassword = Meteor.myAuthFuncs.trimInput(event.target.repassword.value)
    let id = FlowRouter.getParam('id')
    if (Meteor.myAuthFuncs.isNotEmpty(username) &&
        Meteor.myAuthFuncs.isNotEmpty(email) &&
        isCorrectPass(id, oldpassword) &&
        Meteor.myAuthFuncs.isNotEmpty(password) &&
        Meteor.myAuthFuncs.isEmail(email) &&
        Meteor.myAuthFuncs.areValidPasswords(password, repassword)) {
      // do stuff
      Meteor.call('updatedProfile', id, username, email, password)
      Bert.alert('Your Profile Was Updated!', 'success', 'growl-top-right')
      FlowRouter.go('/profile/' + id)
    } else {
      Bert.alert('something went wrong', 'danger', 'growl-top-right')
    }
    return false // Prevent submit
  }
})

let isCorrectPass = function (userid, password) {
  if (Meteor.users.find({_id: userid}).password === password) {
    console.log(true)
    return true
  }
  console.log(false)
  return false
}
