import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Projects } from '../lib/collections/collections.js'
import { DefaultUsers } from './defaults/DefaultUsers.js'
import { DefaultProjects } from './defaults/DefaultProjects.js'

Meteor.startup(() => {
  if (Meteor.isServer) {
    console.log(Meteor.users.find().count())
    if (Meteor.users.find().count() < 1) {
      console.log(DefaultUsers)
      DefaultUsers.forEach((user) => {
        Accounts.createUser({
          username: user.username,
          email: user.email,
          password: user.password,
          profile: user.profile
        })
      })
    }
    console.log(Projects.find().count())
    if (Projects.find().count() < 1) {
      console.log(DefaultProjects)
      DefaultProjects.forEach((project) => {
        var year = new Date().getFullYear()
        var month = new Date().getMonth() + 1 // [ 0 : January, ]
        var day = new Date().getDate()
        var date = (month + '/' + day + '/' + year).toString()
        Projects.insert({
          projectName: project.Name,
          projectDesc: project.Desc,
          projectContent: project.Content,
          author: project.Author,
          userId: Meteor.users.findOne({username: project.Author})._id,
          date: date,
          createdAt: new Date(),
          voted: [{username: project.Author, voteType: 'default'}],
          scores: {
            awesomeScore: 0,
            niceScore: 0,
            badScore: 0,
            shitScore: 0
          }
        })
      })
    }
  }
})
