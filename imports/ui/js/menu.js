import { Template } from "meteor/templating";
import "../html/menu.html";

Template.menu.helpers({
  logined(){
    return (Meteor.userId() != null);
  },
});

Template.menu.events({
  'click #logout'(event,instance){
    event.preventDefault();
    Meteor.logout();
    FlowRouter.go("/");
    //alert(Meteor.userId());
  },

});
