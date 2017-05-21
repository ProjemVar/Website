import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Messages } from '../../../../lib/collections/collections.js'
import moment from 'moment'
import '../../html/pages/PageChat.html'

Template.messages.helpers({
  messages: function () {
    let id = FlowRouter.getParam('id')
    return Messages.find({projectId: id}, {sort: {time: 1}})
  },
  getDate: function (time) {
    return moment(time).format('MMMM Do YYYY, h:mm:ss a')
  }
})

Template.input.events = {
  'keydown input#message': function (event) {
    if (event.which === 13) { // 13 is the enter key event
      let id = FlowRouter.getParam('id')
      var name
      if (Meteor.user()) {
        name = Meteor.user().username
      } else {
        name = 'Anonymous'
      }
      var message = document.getElementById('message')
      if (message.value !== '') {
        Messages.insert({
          projectId: id,
          name: name,
          message: message.value,
          time: Date.now()
        })
        document.getElementById('message').value = ''
        message.value = ''
      }
    }
  }
}
