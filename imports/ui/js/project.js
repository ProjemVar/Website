import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Bert } from 'meteor/themeteorchef:bert'
import { Projects } from '../../../lib/collections/collections.js'
import '../html/project.html'

Template.projects.helpers({
  getAllProjects () {
    console.log('Runned getAllProjects helpers')
    console.log(Projects.find({}, {sort: {createdAt: -1}}))
    return Projects.find({}, {sort: {createdAt: -1}})
  }
})

Template.projects.events({
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
  },
  'click #awesomeFace': function (event) {
    let project = Projects.findOne({_id: this._id})
    let votedUser = Meteor.user().username
    console.log(project.voted)
    console.log(votedUser)
    if (votedUser === project.author) {
      Bert.alert('You cannot vote for your own project', 'danger', 'growl-top-right')
    } else {
      if (project.voted.indexOf(votedUser) > -1) {
        Bert.alert('You cannot vote twice', 'danger', 'growl-top-right')
      } else {
        Meteor.call('AddUsernameInVoted', project._id, votedUser)
        Meteor.call('IncUserScore', project.userId, 'awesomeScore')
        Meteor.call('IncProjectScore', project._id, 'awesomeScore')
        Bert.alert('Your Vote Was Placed', 'success', 'growl-top-right')
      }
    }
  },
  'click #niceFace': function (event) {
    let project = Projects.findOne({_id: this._id})
    let votedUser = Meteor.user().username
    console.log(project.voted)
    console.log(votedUser)
    if (votedUser === project.author) {
      Bert.alert('You cannot vote for your own project', 'danger', 'growl-top-right')
    } else {
      if (project.voted.indexOf(votedUser) > -1) {
        Bert.alert('You cannot vote twice', 'danger', 'growl-top-right')
      } else {
        Meteor.call('AddUsernameInVoted', project._id, votedUser)
        Meteor.call('IncUserScore', project.userId, 'niceScore')
        Meteor.call('IncProjectScore', project._id, 'niceScore')
        Bert.alert('Your Vote Was Placed', 'success', 'growl-top-right')
      }
    }
  },
  'click #badFace': function (event) {
    let project = Projects.findOne({_id: this._id})
    let votedUser = Meteor.user().username
    console.log(project.voted)
    console.log(votedUser)
    if (votedUser === project.author) {
      Bert.alert('You cannot vote for your own project', 'danger', 'growl-top-right')
    } else {
      if (project.voted.indexOf(votedUser) > -1) {
        Bert.alert('You cannot vote twice', 'danger', 'growl-top-right')
      } else {
        Meteor.call('AddUsernameInVoted', project._id, votedUser)
        Meteor.call('IncUserScore', project.userId, 'badScore')
        Meteor.call('IncProjectScore', project._id, 'badScore')
        Bert.alert('Your Vote Was Placed', 'success', 'growl-top-right')
      }
    }
  },
  'click #shitFace': function (event) {
    let project = Projects.findOne({_id: this._id})
    let votedUser = Meteor.user().username
    console.log(project.voted)
    console.log(votedUser)
    if (votedUser === project.author) {
      Bert.alert('You cannot vote for your own project', 'danger', 'growl-top-right')
    } else {
      if (project.voted.indexOf(votedUser) > -1) {
        Bert.alert('You cannot vote twice', 'danger', 'growl-top-right')
      } else {
        Meteor.call('AddUsernameInVoted', project._id, votedUser)
        Meteor.call('IncUserScore', project.userId, 'shitScore')
        Meteor.call('IncProjectScore', project._id, 'shitScore')
        Bert.alert('Your Vote Was Placed', 'success', 'growl-top-right')
      }
    }
  }
})

Template.showproject.helpers({
  getId: function () {
    var id = FlowRouter.getParam('id')
    return id
  },
  project: function () {
    var id = FlowRouter.getParam('id')
    return Projects.findOne({_id: id})
  }
})

// editproject template
Template.editproject.helpers({
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

Template.editproject.events({
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
