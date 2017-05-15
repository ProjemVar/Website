import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import '../html/project.html'
import '../../api/db-project.js'

Template.project.helpers({
  getUserProjects () {
    return Meteor.dbProject.getProjectsByUserId()
  }
})

Template.project.events({
  'click #create' (event, instance) {
    event.preventDefault()
    let name = event.target.cName.value
    let desc = event.target.cDesc.value
    let content = event.target.cContent.value
    Meteor.dbProject.addProject(name, desc, content)
  },
  'click #deleteProject' (event, instance) {
    Meteor.dbProject.deleteProject(this._id)
    // alert(this._id);
  }
})
