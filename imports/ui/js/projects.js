import { Template } from 'meteor/templating'
import { Projects } from '../../../lib/collections/collections.js'
import '../html/projects.html'

Template.projects.helpers({
  getAllProjects () {
    console.log('Runned getAllProjects helpers')
    console.log(Projects.find({}, {sort: {createdAt: -1}}))
    return Projects.find({}, {sort: {createdAt: -1}})
  }
})

Template.projects.events({})
