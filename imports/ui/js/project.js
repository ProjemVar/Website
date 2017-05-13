import { Template } from "meteor/templating";
import "../html/project.html";
import "../../api/db-project.js";

Template.project.helpers({
  getUserProjects(){
    return Meteor.dbProject.getProjects({UserId : Meteor.userId()});
  }
});


Template.project.events({
  "click #create"(event,instance){
    event.preventDefault();
    var name = $("#cName").val();
    var desc = $("#cDesc").val();
    $("#cName").val("");
    $("#cDesc").val("");
    Meteor.dbProject.addProject(name,desc);
  },



});
