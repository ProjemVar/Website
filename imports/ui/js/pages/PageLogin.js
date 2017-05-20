import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import { Bert } from 'meteor/themeteorchef:bert'
import '../../html/pages/PageLogin.html'

Template.PageLogin.onCreated(function loginOnCreated () {
  if (Meteor.userId() !== null) {
    FlowRouter.go('/')
  }
})

Template.PageLogin.helpers({
})

Template.PageLogin.events({
  'submit .form-signin': function (event) {
    var email = Meteor.myAuthFuncs.trimInput(event.target.email.value)
    var password = Meteor.myAuthFuncs.trimInput(event.target.password.value)
    if (Meteor.myAuthFuncs.isNotEmpty(email) &&
        Meteor.myAuthFuncs.isNotEmpty(password) &&
        Meteor.myAuthFuncs.isEmail(email) &&
        Meteor.myAuthFuncs.isValidPassword(password)) {
        // do stuff
      Meteor.loginWithPassword(email, password, function (err) {
        if (err) {
          Bert.alert(err.reason, 'danger', 'growl-top-right')
          return false
        } else {
          FlowRouter.go('/')
          Bert.alert('You are now logged in', 'success', 'growl-top-right')
        }
      })
    }
    return false // Prevent submit
  }
})
