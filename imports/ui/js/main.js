import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Projects } from '../../../lib/collections/collections.js'
import '../html/main.html'
import './index.js'
import './project.js'
import './profile.js'
import './register.js'
import './login.js'
import './home.js'
import './menu.js'

Template.main.helpers({
  countProject: function () {
    return Projects.find().count()
  },
  countUsers: function () {
    return Meteor.users.find().count()
  }
})
