import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Projects } from '../../../../lib/collections/collections.js'
import '../../html/pages/PageHome.html'

Template.PageHome.onCreated(function homeOnCreated () {
  this.searchQuery = new ReactiveVar('')
})

Template.PageHome.helpers({
  getUsername: function () {
    return Meteor.user().username
  },
  getBestorSearchedProjects: function () {
    let searchQ = Template.instance().searchQuery.get()
    if (searchQ.length > 0) {
      return Projects.find(
        {
          $or: [
            {projectDesc: {$regex: searchQ, $options: 'i'}},
            {projectName: {$regex: searchQ, $options: 'i'}},
            {author: {$regex: searchQ, $options: 'i'}}
          ]
        },
        { sort: {'totalScore': -1} }
      )
    }
    return Projects.find({}, { sort: {'totalScore': -1} })
  }
})
Template.PageHome.events({
  'submit #search-project': function (event, instance) {
    event.preventDefault()
    let searchQ = $('#search-project-query').val()
    instance.searchQuery.set(searchQ)
  }
})
