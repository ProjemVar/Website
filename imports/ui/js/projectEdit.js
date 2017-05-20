import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Bert } from 'meteor/themeteorchef:bert'
import { Projects } from '../../../lib/collections/collections.js'
import '../html/projectEdit.html'

// editproject template
Template.projectEdit.helpers({
  getId: function () {
    var id = FlowRouter.getParam('id')
    return id
  },
  project: function () {
    var id = FlowRouter.getParam('id')
    return Projects.findOne({_id: id})
  },
  isAdminOrYourself () {
    var username = Meteor.user().username
    let id = FlowRouter.getParam('id')
    let project = Projects.findOne({_id: id})
    if (username === 'admin' || username === project.author) {
      return true
    }
    return false
  }
})

Template.projectEdit.events({
  'submit .project-update-post': function (event) {
    let projectName = Meteor.myAuthFuncs.trimInput(event.target.projectName.value)
    let projectDesc = Meteor.myAuthFuncs.trimInput(event.target.projectDesc.value)
    let projectContent = Meteor.myAuthFuncs.trimInput(event.target.projectContent.value)
    let id = FlowRouter.getParam('id')
    console.log(projectName, projectDesc, projectContent)
    if (Meteor.myAuthFuncs.isNotEmpty(projectName) &&
        Meteor.myAuthFuncs.isNotEmpty(projectDesc) &&
        Meteor.myAuthFuncs.isNotEmpty(projectContent)) {
      // do stuff
      Meteor.call('updatedProject', id, projectName, projectDesc, projectContent)
      Bert.alert('Your Project Was Updated!', 'success', 'growl-top-right')
      FlowRouter.go('/project/' + id)
    } else {
      Bert.alert('something went wrong', 'danger', 'growl-top-right')
    }
    return false // Prevent submit
  }
})
