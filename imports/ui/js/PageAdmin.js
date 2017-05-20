import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Bert } from 'meteor/themeteorchef:bert'
import '../html/PageAdmin.html'

Template.PageAdmin.helpers({
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
  }
})
