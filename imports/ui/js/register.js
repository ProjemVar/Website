import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Bert } from 'meteor/themeteorchef:bert'
import { Template } from 'meteor/templating'
import '../html/register.html'

Template.register.events({
  'submit #register-form' (event, instance) {
    event.preventDefault()
    let username = Meteor.myAuthFuncs.trimInput(event.target.username.value)
    let email = Meteor.myAuthFuncs.trimInput(event.target.email.value)
    let password = Meteor.myAuthFuncs.trimInput(event.target.password.value)
    let repassword = Meteor.myAuthFuncs.trimInput(event.target.repassword.value)
    if (Meteor.myAuthFuncs.isNotEmpty(username) &&
        Meteor.myAuthFuncs.isNotEmpty(email) &&
        Meteor.myAuthFuncs.isNotEmpty(password) &&
        Meteor.myAuthFuncs.isEmail(email) &&
        Meteor.myAuthFuncs.areValidPasswords(password, repassword)) {
        // do stuff
      Accounts.createUser({
        username: username,
        email: email,
        password: password,
        scores: {
          awesomeScore: 0,
          niceScore: 0,
          badScore: 0,
          shitScore: 0
        }
      }, function (err) {
        if (err) {
          Bert.alert(err.reason, 'danger', 'growl-top-right')
        } else {
          Bert.alert('Account Created! You Are Now Logged In', 'success', 'growl-top-right')
          FlowRouter.go('/')
        }
      })
    }
    return false // prevent submit
  }
})
