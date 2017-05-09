import { Template } from "meteor/templating";
import "../html/project.html";

Template.project.helpers({
  getUserProjects(){
    return Meteor.dbProject.getProjects({userId : Meteor.userId()});
  },
});
