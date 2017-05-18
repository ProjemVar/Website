import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Bert } from 'meteor/themeteorchef:bert'
import '../html/index.html'

Template.index.helpers({
  isAdmin () {
    let person = Meteor.user()
    if (!person) {
      console.log('Anonymus')
      return false
    } else {
      console.log(person.username)
      if (person.username === 'admin') {
        return true
      } else {
        return false
      }
    }
  },
  allUsers () {
    return Meteor.users.find({})
  },
  userEmail: function () {
    return this.emails[0].address
  }
})

Template.index.events({
  'click #delete-user': function (event) {
    Meteor.call('removeUser', this._id)
    Bert.alert('User Was Deleted', 'success', 'growl-top-right')
  }
})
