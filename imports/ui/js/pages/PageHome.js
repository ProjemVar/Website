import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import '../../html/pages/PageHome.html'

Template.PageHome.onCreated(function homeOnCreated () {
  console.log('Home Page created')
})

Template.PageHome.helpers({
  getUsername: function () {
    return Meteor.user().username
  }
})
