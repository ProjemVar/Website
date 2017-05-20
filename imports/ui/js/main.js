import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Projects } from '../../../lib/collections/collections.js'
import '../html/main.html'

// Pages
import './pages/PageAdmin.js'
import './pages/PageHome.js'
import './pages/PageProjects.js'
import './pages/PageLogin.js'
import './pages/PageRegister.js'
import './pages/PageProfile.js'
// W
import './projects.js'
import './projectEdit.js'
import './projectShow.js'
import './profileEdit.js'

// Layouts
import './layouts/menu.js'
import './layouts/project.js'
import './layouts/users.js'

Template.main.helpers({
  countProject: function () {
    return Projects.find().count()
  },
  countUsers: function () {
    return Meteor.users.find().count()
  }
})
