import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Bert } from 'meteor/themeteorchef:bert'
import { Projects } from '../../../lib/collections/collections.js'
import '../html/project.html'

Template.project.helpers({
  getUserProjects () {
    console.log(Meteor.userId())
    return Projects.find({userId: Meteor.userId()}, {sort: {createdAt: -1}})
  },
  getAllProjects () {
    return Projects.find({}, {sort: {createdAt: -1}})
  }
})

Template.project.events({
  'submit .project-post': function (event) {
    let projectName = Meteor.myAuthFuncs.trimInput(event.target.projectName.value)
    let projectDesc = Meteor.myAuthFuncs.trimInput(event.target.projectDesc.value)
    let projectContent = Meteor.myAuthFuncs.trimInput(event.target.projectContent.value)
    console.log(projectName, projectDesc, projectContent)
    if (Meteor.myAuthFuncs.isNotEmpty(projectName) &&
        Meteor.myAuthFuncs.isNotEmpty(projectDesc) &&
        Meteor.myAuthFuncs.isNotEmpty(projectContent)) {
      // do stuff
      Meteor.call('addProject', projectName, projectDesc, projectContent)
      event.target.projectName.value = ''
      event.target.projectDesc.value = ''
      event.target.projectContent.value = ''
      Bert.alert('Your Project Was Posted!', 'success', 'growl-top-right')
    } else {
      Bert.alert('something went wrong', 'danger', 'growl-top-right')
    }
    return false // Prevent submit
  },
  'click #delete-project': function (event) {
    Meteor.call('removeProject', this._id)
    Bert.alert('Your Project Was Deleted', 'success', 'growl-top-right')
  }
})
