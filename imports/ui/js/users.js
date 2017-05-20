import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Bert } from 'meteor/themeteorchef:bert'
import '../html/users.html'

Template.users.helpers({
  allUsers () {
    return Meteor.users.find({})
  },
  userEmail: function () {
    return this.emails[0].address
  }
})

Template.users.events({
  'click #delete-user': function (event) {
    Meteor.call('removeUser', this._id)
    Bert.alert('User Was Deleted', 'success', 'growl-top-right')
  },
  'click #getBackup': function (event) {
    console.log('BackUp Completed!')
  }
})
