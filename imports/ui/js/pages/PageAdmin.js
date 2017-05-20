import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import '../../html/pages/PageAdmin.html'

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
