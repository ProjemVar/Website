import { Template } from 'meteor/templating'
import { Projects } from '../../../../lib/collections/collections.js'
import { ReactiveVar } from 'meteor/reactive-var'
import '../../html/layouts/projects.html'

Template.projects.onCreated(function () {
  // Here, this equals the current template instance. We can assign
  // our ReactiveVar to it, making it accessible throughout the
  // current template instance.
  this.page = new ReactiveVar(0)
  console.log('this.page: ', this.page)
})

Template.projects.helpers({
  getAllProjects () {
    console.log('Runned getAllProjects helpers')
    console.log(Projects.find({}, {sort: {createdAt: -1}}))
    console.log('Page: ', Template.instance().page.get())
    return Projects.find({}, {sort: {createdAt: -1}, skip: Template.instance().page.get() * 5, limit: 5})
  }
})
Template.projects.events({})
