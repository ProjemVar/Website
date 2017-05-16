import { Meteor } from 'meteor/meteor'
import { Bert } from 'meteor/themeteorchef:bert'

Meteor.myAuthFuncs = {
  // Validation Rules
  // Trim Helper
  trimInput: function (value) {
    return value.replace(/^\s*|\s*$/g, '')
  },
  isNotEmpty: function (value) {
    if (value && value !== '') {
      return true
    }
    Bert.alert('Please fill in all fields', 'danger', 'growl-top-right')
    return false
  },
  // Validate Email
  isEmail: function (value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (filter.test(value)) {
      return true
    }
    Bert.alert('Please use a valid email address', 'danger', 'growl-top-right')
    return false
  },
  // Check Password Field
  isValidPassword: function (password) {
    if (password.length < 6) {
      Bert.alert('Password must be at least 6 characters', 'danger', 'growl-top-right')
      return false
    }
    return true
  },
  // Match Password
  areValidPasswords: function (password, confirm) {
    if (!this.isValidPassword(password)) {
      return false
    }
    if (password !== confirm) {
      Bert.alert('Passwords do not match', 'danger', 'growl-top-right')
      return false
    }
    return true
  }
}
