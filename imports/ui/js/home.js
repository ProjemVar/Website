import { Template } from 'meteor/templating'
import '../html/home.html'

Template.home.onCreated(function homeOnCreated () {
  console.log('Home Page created')
})
