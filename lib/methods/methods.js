import { Meteor } from 'meteor/meteor'
import { Projects } from '../collections/collections.js'
if (Meteor.isServer) {
  Meteor.methods({
    // Method for adding projects
    addProjects: function (projectName, projectDesc, projectContent) {
      console.log('Runned addProjects methods ', projectName, projectDesc, projectContent)
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      } else {
        var username = Meteor.user().username
        var year = new Date().getFullYear()
        var month = new Date().getMonth() + 1 // [ 0 : January, ]
        var day = new Date().getDate()
        var date = (month + '/' + day + '/' + year).toString()
        Projects.insert({
          projectName: projectName,
          projectDesc: projectDesc,
          projectContent: projectContent,
          author: username,
          userId: Meteor.userId(),
          date: date,
          createdAt: new Date(),
          voted: [username],
          scores: {
            awesomeScore: 0,
            niceScore: 0,
            badScore: 0,
            shitScore: 0
          }
        })
      }
    }
  })
}