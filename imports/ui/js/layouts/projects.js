import { Template } from 'meteor/templating'
import { Projects } from '../../../../lib/collections/collections.js'
import { ReactiveVar } from 'meteor/reactive-var'
import '../../html/layouts/projects.html'

Template.projects.onCreated(function () {
  // Here, this equals the current template instance. We can assign
  // our ReactiveVar to it, making it accessible throughout the
  // current template instance.
  this.page = new ReactiveVar(0)
  this.pageLast = new ReactiveVar(false)
})

Template.projects.helpers({
  getAllProjects () {
    console.log(Projects.find({}, {sort: {createdAt: -1}}))
    console.log('Page: ', Template.instance().page.get())
    let projects = Projects.find({}, {sort: {createdAt: -1}, skip: Template.instance().page.get() * 5, limit: 5})
    if (!projects.count()) Template.instance().pageLast.set(true)
    return projects
  }
})
Template.projects.events({
  'click #next': function (event) {
    if (!Template.instance().pageLast.get()) {
      let page = Template.instance().page
      page.set(page.get() + 1)
    }
  },
  'click #prev': function (event) {
    let page = Template.instance().page
    if (page.get() > 0) {
      page.set(page.get() - 1)
    }
    Template.instance().pageLast.set(false)
  }
})
