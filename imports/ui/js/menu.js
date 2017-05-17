import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import { Bert } from 'meteor/themeteorchef:bert'
import '../html/menu.html'

Template.menu.helpers({
  getId: function () {
    return Meteor.userId()
  }
})

Template.menu.events({
  'click #logout': function (event) {
    Meteor.logout(function (err) {
      if (err) {
        Bert.alert(err.reason, 'danger', 'growl-top-right')
      } else {
        FlowRouter.go('/')
        Bert.alert('You Are Now Logged Out', 'success', 'growl-top-right')
      }
    })
  }
})
