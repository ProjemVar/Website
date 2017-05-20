import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Bert } from 'meteor/themeteorchef:bert'
import '../../html/pages/PageProjects.html'

Template.PageProjects.events({
  'submit .project-post': function (event) {
    let projectName = Meteor.myAuthFuncs.trimInput(event.target.projectName.value)
    let projectDesc = Meteor.myAuthFuncs.trimInput(event.target.projectDesc.value)
    let projectContent = Meteor.myAuthFuncs.trimInput(event.target.projectContent.value)
    console.log(projectName, projectDesc, projectContent)
    if (Meteor.myAuthFuncs.isNotEmpty(projectName) &&
        Meteor.myAuthFuncs.isNotEmpty(projectDesc) &&
        Meteor.myAuthFuncs.isNotEmpty(projectContent)) {
      // do stuff
      Meteor.call('addProject', projectName, projectDesc, projectContent)
      event.target.projectName.value = ''
      event.target.projectDesc.value = ''
      event.target.projectContent.value = ''
      Bert.alert('Your Project Was Posted!', 'success', 'growl-top-right')
    } else {
      Bert.alert('something went wrong', 'danger', 'growl-top-right')
    }
    return false // Prevent submit
  }
})
