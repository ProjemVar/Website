import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import { Bert } from 'meteor/themeteorchef:bert'
import '../html/profileEdit.html'

Template.profileEdit.helpers({
  getId: function () {
    let id = FlowRouter.getParam('id')
    return id
  },
  profile: function () {
    let id = FlowRouter.getParam('id')
    let user = Meteor.users.findOne({_id: id})
    return {
      username: user.username,
      email: user.emails[0].address
    }
  },
  isAdminOrYourself () {
    var username = Meteor.user().username
    let id = FlowRouter.getParam('id')
    let user = Meteor.users.findOne({_id: id})
    if (username === 'admin' || username === user.username) {
      return true
    }
    return false
  }
})

Template.profileEdit.events({
  'submit .profile-update-post': function (event) {
    event.preventDefault()
    let username = Meteor.myAuthFuncs.trimInput(event.target.username.value)
    let email = Meteor.myAuthFuncs.trimInput(event.target.email.value)
    let oldPassword = Meteor.myAuthFuncs.trimInput(event.target.oldpassword.value)
    let password = Meteor.myAuthFuncs.trimInput(event.target.password.value)
    let repassword = Meteor.myAuthFuncs.trimInput(event.target.repassword.value)
    let id = FlowRouter.getParam('id')
    if (Meteor.myAuthFuncs.isNotEmpty(username) &&
        Meteor.myAuthFuncs.isNotEmpty(email) &&
        Meteor.myAuthFuncs.isNotEmpty(oldPassword) &&
        Meteor.myAuthFuncs.isNotEmpty(password) &&
        Meteor.myAuthFuncs.isNotEmpty(repassword) &&
        Meteor.myAuthFuncs.isEmail(email) &&
        Meteor.myAuthFuncs.areValidPasswords(password, repassword)) {
      // do stuff
      Accounts.changePassword(oldPassword, password, function (error) {
        if (error) {
          Bert.alert('Not changing password', 'danger', 'growl-top-right')
        } else {
          Meteor.call('updatedProfile', id, username, email, password)
          Bert.alert('Your Profile Was Updated!', 'success', 'growl-top-right')
          FlowRouter.go('/profile/' + id)
        }
      })
    } else {
      Bert.alert('something went wrong', 'danger', 'growl-top-right')
    }
    return false // Prevent submit
  }
})
