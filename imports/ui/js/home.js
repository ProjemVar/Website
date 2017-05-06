import { Template } from "meteor/templating";
import "../html/home.html";

Template.home.onCreated(function homeOnCreated(){
  if(Meteor.userId() == null)
		FlowRouter.go("/");
});
