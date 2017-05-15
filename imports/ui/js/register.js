import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import '../html/register.html'

Template.register.events({
  'submit #regform' (event, instance) {
    event.preventDefault()
    let username = event.target.username.value
    let email = event.target.email.value
    let password = event.target.password.value
    let repassword = event.target.repassword.value
    if (!Meteor.myAuthFuncs.comparePass(password, repassword)) {
      console.log('Pass Not Same')
      return
    }
    var passControl = Meteor.myAuthFuncs.isPasswordValid(password)
    console.log(passControl.isErr + ' -- ' + passControl.msg)
    if (passControl.isErr) {
      console.log(passControl.msg)
      return
    }
    if (!Meteor.myAuthFuncs.isEmailValid(email)) {
      console.log('Email Not Valid')
      return
    }
    Accounts.createUser({
      username: username,
      email: email,
      password: password
    }, function (error) {
      if (error) {
        console.log(error.reason)
      } else {
        Meteor.dbProfile.createProfile()
        FlowRouter.go('/home')
      }
    })
  }
})
