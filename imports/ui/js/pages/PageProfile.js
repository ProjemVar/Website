import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import { Projects } from '../../../../lib/collections/collections.js'
import '../../html/pages/PageProfile.html'

Template.PageProfile.helpers({
  getUserProjects () {
    let id = FlowRouter.getParam('id')
    console.log(id)
    return Projects.find({userId: id}, {sort: {createdAt: -1}})
  },
  getUserInfo () {
    let id = FlowRouter.getParam('id')
    let user = Meteor.users.findOne({_id: id})
    return {
      id: user._id,
      username: user.username,
      email: user.emails[0].address
    }
  },
  // Not same in project.js
  isAdminOrYourself () {
    let id = FlowRouter.getParam('id')
    if (Meteor.user()) {
      let username = Meteor.user().username
      let userId = Meteor.userId()
      if (username === 'admin' || userId === id) {
        return true
      }
    }
    return false
  }
})
Template.PageProfile.events({})
