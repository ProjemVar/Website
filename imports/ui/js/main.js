import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Projects } from '../../../lib/collections/collections.js'
import '../html/main.html'

// Pages
import './PageAdmin.js'
import './PageHome.js'
import './PageProjects.js'
import './PageLogin.js'
import './PageRegister.js'

// W
import './menu.js'
import './projectEdit.js'
import './projectShow.js'
import './projects.js'
import './profileEdit.js'
import './profile.js'
import './users.js'

Template.main.helpers({
  countProject: function () {
    return Projects.find().count()
  },
  countUsers: function () {
    return Meteor.users.find().count()
  }
})
