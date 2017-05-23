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
    let messageInput = event.target.messageInput
    let id = FlowRouter.getParam('id')
    let name = (Meteor.user()) ? Meteor.user().username : 'Anonymous'
    if (messageInput.value === '') return
    Messages.insert({
      projectId: id,
      name: name,
      message: messageInput.value,
      createdAt: Date.now()
    })
    messageInput.value = ''
    var chatDiv = $(".chat-messages")
    chatDiv.scrollTop(chatDiv.prop("scrollHeight"))
    return false
  }
}
