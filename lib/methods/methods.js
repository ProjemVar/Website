import { Meteor } from 'meteor/meteor'
import { Projects } from '../collections/collections.js'
if (Meteor.isServer) {
  Meteor.methods({
    // Method for adding projects
    addProject: function (projectName, projectDesc, projectContent) {
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
          voted: [{username: username, voteType: 'default'}],
          totalScore: 0,
          scores: {
            awesomeScore: 0,
            niceScore: 0,
            badScore: 0,
            shitScore: 0
          }
        })
      }
    },
    removeProject: function (projectId) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      } else {
        Projects.remove(projectId)
      }
    },
    updatedProject: function (projectId, projectName, projectDesc, projectContent) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      } else {
        Projects.update({_id: projectId}, {
          $set: {
            projectName: projectName,
            projectDesc: projectDesc,
            projectContent: projectContent
          }
        })
      }
    },
    updatedProfile: function (profileId, username, email, password) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      } else {
        Meteor.users.update({_id: profileId}, {
          $set: {
            username: username
          }
        })
      }
    },
    removeUser: function (userId) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      } else {
        Meteor.users.remove(userId)
      }
    },
    AddUsernameInVoted: function (projectId, votedUser, vote) {
      console.log('[+] Runned AddUsernameInVoted method projectId:', projectId, ' votedUser:', votedUser)
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      } else {
        Projects.update({_id: projectId}, { $addToSet: {voted: {username: votedUser, voteType: vote}} })
      }
    },
    IncUserScore: function (projectAuthorId, whichScore) {
      let temp = 0
      switch (whichScore) {
        case 'awesomeScore':
          temp = 5
          break
        case 'niceScore':
          temp = 3
          break
        case 'badScore':
          temp = 1
          break
        default:
          temp = -1
      }
      let obj = {}
      let key = 'scores.' + whichScore
      obj[key] = 1
      console.log('[+] Runned IncUserScore method projectAuthorId:', projectAuthorId, ' obj:', obj)
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      } else {
        Meteor.users.update({_id: projectAuthorId}, { $inc: obj })
        Meteor.users.update({_id: projectAuthorId}, { $inc: {'totalScore': temp} })
      }
    },
    IncProjectScore: function (projectId, whichScore) {
      let temp = 0
      switch (whichScore) {
        case 'awesomeScore':
          temp = 5
          break
        case 'niceScore':
          temp = 3
          break
        case 'badScore':
          temp = 1
          break
        default:
          temp = -1
      }
      let obj = {}
      let key = 'scores.' + whichScore
      obj[key] = 1
      console.log('[+] Runned IncProjectScore method projectId:', projectId, ' obj:', obj)
      if (!Meteor.userId()) {
        throw new Meteor.Error('Not authorized')
      } else {
        Projects.update({_id: projectId}, { $inc: obj })
        Projects.update({_id: projectId}, { $inc: {'totalScore': temp} })
      }
    }

  })
}
