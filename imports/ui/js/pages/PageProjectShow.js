import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Projects } from '../../../../lib/collections/collections.js'
import '../../html/pages/PageProjectShow.html'

Template.PageProjectShow.helpers({
  getId: function () {
    var id = FlowRouter.getParam('id')
    return id
  },
  project: function () {
    var id = FlowRouter.getParam('id')
    return Projects.findOne({_id: id})
  }
})
