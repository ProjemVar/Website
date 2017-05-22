import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Messages } from '../../../../lib/collections/collections.js'
import moment from 'moment'
import '../../html/pages/PageChat.html'

Template.messages.helpers({
  messages: function () {
    let id = FlowRouter.getParam('id')
    return Messages.find({projectId: id}, {sort: {createdAt: 1}})
  },
  getDate: function (time) {
    return moment(time).format('MMMM Do YYYY, h:mm:ss a')
  }
})

Template.input.events = {
  'submit #messageForm': function (event) {
    event.preventDefault()
    let id = FlowRouter.getParam('id')
    var name = (Meteor.user()) ? Meteor.user().username : "Anonymous"
    var message = $("#messageInput")
    if (message.val() === '') return;

    Messages.insert({
        projectId: id,
        name: name,
        message: message.val(),
        createdAt: Date.now()
      })

    message.val("")
  }
}
